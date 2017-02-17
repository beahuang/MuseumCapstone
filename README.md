# Interaction Team Degree Project: Museum Mobile App

## Software Prerequisites
* Git
  * Comes with Mac OS X; `brew install git` will give you a ✨newer✨, 🍏fresher🍏
    version.
* Node
  * Version specified in `.nvmrc` file.
  * I recommend using [nvm](https://github.com/creationix/nvm) to manage
    different node versions for various projects on the same machine.
  * We're going to keep reasonably updated with the latest Node version.

## Development
1. Clone this repository, and change directory into this repository.
2. Run `npm install` to install everything
3. Run `npm run watch` to start webpack and the browser-sync server and start developing like it's a normal web app

## How to get Up and Running on a Phone
1. Run `npm install -g cordova` to install cordova
2. Run `cordova build` to build the App

### Android
1. Run `npm run android` to emulator android or `cordova build` and `cordova run android` if you have an android phone plugged in

### iOS
1. Open Xcode and make sure .xcodeproj file is selected in the left panel
2. Select the App
3. Run on a device
