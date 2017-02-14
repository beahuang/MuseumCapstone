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

## How to get Up and Running
1. Clone this repository, and change directory into this repository.
2. Run `npm install -g cordova` to install cordova
3. Run `npm install` to install everything else
4. Run `cordova build` to build the App

### Android
1. Run `cordova emulate android` to emulator android or `cordova run android` if you have an android phone plugged in

### iOS
1. Open Xcode and make sure .xcodeproj file is selected in the left panel
2. Select the App
3. Run on a device
