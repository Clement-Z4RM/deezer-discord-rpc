<div align="center">
    <h1>Deezer Discord RPC</h1>
    <a href="https://github.com/CuteTenshii/deezer-discord-rpc/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/CuteTenshii/deezer-discord-rpc?style=for-the-badge"></a>
    <a href="https://github.com/CuteTenshii/deezer-discord-rpc/releases/latest"><img alt="GitHub release (latest by date)" src="https://img.shields.io/github/downloads/CuteTenshii/deezer-discord-rpc/latest/total?style=for-the-badge"></a>
    <a href="https://github.com/CuteTenshii/deezer-discord-rpc/releases/latest"><img alt="GitHub release (latest by date including pre-releases)" src="https://img.shields.io/github/v/release/CuteTenshii/deezer-discord-rpc?include_prereleases&label=latest%20release&style=for-the-badge"></a>
    <a href="https://github.com/CuteTenshii/deezer-discord-rpc/commits"><img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/w/CuteTenshii/deezer-discord-rpc?style=for-the-badge"></a>
    <hr />
    <p>A Discord RPC for showing the music you're listening to on Deezer (like the Spotify integration).</p>
    <a href="https://github.com/CuteTenshii/deezer-discord-rpc/wiki/RPC-doesn't-show%3F">RPC doesn't show?</a>
</div>

## Features

* Updates instantly
* Shows the song title, the song artist(s), the album name and cover, and the song duration
* Shows a "Listen on Deezer" button that opens the song on Deezer, if supported
* An in-app updater
* Hides the activity if no song is playing
* Sets a "Listening to" status on the profile
* Includes an ad-blocker, so it can block Deezer ads, Google Analytics, Sentry requests...
* Supports songs, radios, personal songs (MP3s), podcasts

## Installation

### Arch Linux (AUR)

You can install the [`deezer-discord-rpc-bin`](https://aur.archlinux.org/packages/deezer-discord-rpc-bin) package from the AUR using your favorite AUR helper, such as `yay` or `paru`:

```bash
yay -S deezer-discord-rpc-bin
```

### Homebrew (macOS)

You can install the app using Homebrew on macOS:

```bash
brew install --cask cutetenshii/stuff/deezer-discord-rpc
```

### Pre-built Binaries

| **Platform**                     | **Download**                                                                                                                                                                                                                                                         |
|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Windows**                      | [![](https://img.shields.io/github/downloads/CuteTenshii/deezer-discord-rpc/latest/DeezerDiscordRPC-win-x64.exe?style=for-the-badge)](https://github.com/CuteTenshii/deezer-discord-rpc/releases/latest/download/DeezerDiscordRPC-win-x64.exe)                       |
| **Debian/Ubuntu**                | [![](https://img.shields.io/github/downloads/CuteTenshii/deezer-discord-rpc/latest/DeezerDiscordRPC-linux-amd64.deb?style=for-the-badge&logo=debian)](https://github.com/CuteTenshii/deezer-discord-rpc/releases/latest/download/DeezerDiscordRPC-linux-amd64.deb)   |
| **Fedora**                       | [![](https://img.shields.io/github/downloads/CuteTenshii/deezer-discord-rpc/latest/DeezerDiscordRPC-linux-x86_64.rpm?style=for-the-badge&logo=fedora)](https://github.com/CuteTenshii/deezer-discord-rpc/releases/latest/download/DeezerDiscordRPC-linux-x86_64.rpm) |
| `.snap`                          | [![](https://img.shields.io/github/downloads/CuteTenshii/deezer-discord-rpc/latest/DeezerDiscordRPC-linux-amd64.snap?style=for-the-badge)](https://github.com/CuteTenshii/deezer-discord-rpc/releases/latest/download/DeezerDiscordRPC-linux-amd64.snap)             |
| `.AppImage`                      | [![](https://img.shields.io/github/downloads/CuteTenshii/deezer-discord-rpc/latest/DeezerDiscordRPC-linux-x86_64.AppImage?style=for-the-badge)](https://github.com/CuteTenshii/deezer-discord-rpc/releases/latest/download/DeezerDiscordRPC-linux-x86_64.AppImage)   |
| **macOS** (arm64, Apple Silicon) | [![](https://img.shields.io/github/downloads/CuteTenshii/deezer-discord-rpc/latest/DeezerDiscordRPC-mac-arm64.dmg?style=for-the-badge&logo=apple)](https://github.com/CuteTenshii/deezer-discord-rpc/releases/latest/download/DeezerDiscordRPC-mac-arm64.dmg)        |
| **macOS** (x64, Intel)           | [![](https://img.shields.io/github/downloads/CuteTenshii/deezer-discord-rpc/latest/DeezerDiscordRPC-mac-x64.dmg?style=for-the-badge&logo=apple)](https://github.com/CuteTenshii/deezer-discord-rpc/releases/latest/download/DeezerDiscordRPC-mac-x64.dmg)            |

## Screenshots

#### RPC on profile:

![RPC on profile](screenshots/rpc.png)

#### Tray menu:

![Tray menu](screenshots/tray_menu.png)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=CuteTenshii/deezer-discord-rpc&type=Date)](https://star-history.com/#CuteTenshii/deezer-discord-rpc&Date)

## Contributors

[![Contributors](https://contrib.rocks/image?repo=CuteTenshii/deezer-discord-rpc)](https://github.com/CuteTenshii/deezer-discord-rpc/graphs/contributors)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
