/* eslint @typescript-eslint/no-require-imports: 0 */
const { build } = require('electron-builder');
const { existsSync, rmSync } = require('fs');
const { resolve, join } = require('path');

// If the Electron app build folder exists, we need to delete it
if (existsSync(resolve('dist'))) {
  rmSync(resolve('dist'), { recursive: true });
  console.log('Removed "dist" directory');
}

// App build
console.log('Building setup...');
const config = {
  appId: 'com.github.yuuto.deezerdiscordrpc',
  productName: 'Deezer Discord RPC',
  mac: {
    category: 'public.app-category.music',
    target: [{ target: 'dmg', arch: ['x64', 'arm64'] }],
    icon: join(__dirname, '..', 'src', 'img', 'app.icns'),
  },
  win: {
    target: [{ target: 'nsis', arch: ['x64', 'ia32'] }],
    icon: join(__dirname, '..', 'src', 'img', 'app.ico'),
  },
  linux: {
    category: 'Audio;AudioVideo',
    target: ['snap', 'deb', 'AppImage', 'rpm'],
    icon: join(__dirname, '..', 'src', 'img', 'app.png'),
  },
  artifactName: 'DeezerDiscordRPC-${os}-${arch}.${ext}',
  files: [
    '!src/*',
    '!src/**/*',
    'build/package.json',
    'build/src/*',
    'build/src/**/*'
  ]
};

const lastArg = process.argv.pop();
const specifiedOS = ['windows', 'macos', 'linux'].includes(lastArg) ? lastArg : undefined;
if (specifiedOS) {
  console.log(`Building for ${specifiedOS}...`);
  if (specifiedOS === 'windows') {
    // @ts-expect-error Readonly property
    config.mac = undefined;
    // @ts-expect-error Readonly property
    config.linux = undefined;
  } else if (specifiedOS === 'macos') {
    // @ts-expect-error Readonly property
    config.linux = undefined;
    // @ts-expect-error Readonly property
    config.win = undefined;
  } else if (specifiedOS === 'linux') {
    // @ts-expect-error Readonly property
    config.mac = undefined;
    // @ts-expect-error Readonly property
    config.win = undefined;
  }
} else if (process.platform === 'win32') {
  // @ts-expect-error Readonly property
  config.mac = undefined;
  // @ts-expect-error Readonly property
  config.linux = undefined;
}

build({
  config,
  publish: 'never'
}).then(() => {
  console.log('\nSetup built in the "dist" folder.');
});
