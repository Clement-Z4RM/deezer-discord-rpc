import { app, BrowserWindow } from 'electron';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { log } from './utils/Log';
import * as Tray from './utils/Tray';
import updater from './utils/Updater';
import * as RPC from './utils/RPC';
import * as Window from './utils/Window';
import { version } from '../package.json';
import { showWindow, currentTrack } from './utils/Window';

log('App', 'Deezer Discord RPC version', version, process.argv0.includes('node') ? '(debug)' : '');

const expressApp = express();
const server = http.createServer(expressApp);
const io = new Server(server);

expressApp.get('/deezer', (_request, response) => response.sendFile('C:\\path\\to\\deezer-rpc\\index.html')); // TODO: better path handling

io.on('connection', (socket) => {
  socket.on('getSong', () => socket.emit('currentSong', {
    title: currentTrack?.trackTitle,
    artists: currentTrack?.trackArtists,
    albumCover: currentTrack?.albumCover,
    albumTitle: currentTrack?.albumTitle
  }));
});

server.listen(10355); // TODO: configurable port

app.whenReady().then(async () => {
  const gotTheLock = app.requestSingleInstanceLock();

  if (!gotTheLock) {
    app.quit();
  } else {
    app.on('second-instance', () => {
      // If someone opens a second instance we show our windows after the new instance closes
      showWindow();
    });
  }

  await Tray.init(app, RPC.client);
  await Window.load(app, io);
  await updater(true);

  RPC.connect();

  app.on('quit', () => {
    RPC.disconnect();
  });

  app.on('activate', async () => {
    if (BrowserWindow.getAllWindows().length > 0) {
      const window = BrowserWindow.getAllWindows()[0];
      if (!window.isVisible()) window.show();
      if (window.isMinimized()) window.maximize();
    } else {
      await Window.load(app, io);
    }
  });

  app.on('second-instance', (e) => {
    e.preventDefault();

    const window = BrowserWindow.getAllWindows()[0];
    if (!window.isVisible()) window.show();
    if (window.isMinimized()) window.maximize();
  });
});
