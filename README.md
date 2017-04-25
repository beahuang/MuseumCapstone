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
3. [Get a Harvard Art Museum API key.](http://www.harvardartmuseums.org/collections/api)
    Create a new config file at `www/js/config.js`. The contents should be as follows:
    ```js
    export default {
      HARVARD_ART_MUSEUM_API_KEY : __YOUR KEY AS A STRING HERE__,
    }
    ```
4. Run `npm run watch` to start webpack and the browser-sync server and start developing like it's a normal web app

## How to get Up and Running on a Phone
1. Run `npm install -g cordova` to install cordova
2. Run `cordova build` to build the App

### Android

#### Emulating Android
1. *Prerequisites:* Make sure you have [Android Studio](https://developer.android.com/studio/index.html)
installed. If you have [Brew Cask](https://caskroom.github.io/), just run `brew cask install
android-studio`.
2. You will also need an Android System Image, and an Emulator Image (AVD).

  1. Download desired System Image by running: `~/Library/Android/sdk/tools/android sdk`
  2. Create an AVD by running: `~/Library/Android/sdk/tools/android avd`

    HINT: For a faster emulator, use an Intel System Image and install the HAXM device driver.

3. Run `npm run android`

#### Running on a literal Android Phone
1. Plug in your phone
2. `cordova build`
3. `cordova run android`

### iOS
1. Open Xcode and make sure .xcodeproj file is selected in the left panel
2. Select the App
3. Run on a device

## Manifest

```
├── README.md
├── package.json      -- Defines all the dependencies needed that are installed
│                        using `npm install`
│
├── hooks             -- cordova build related folders
├── platforms         -- cordova build related folders
├── plugins           -- cordova build related folders
├── webpack.config.js -- module bundler, allows us to use es6 and other buildtools
├── .babelrc          -- babel options for es6 features
├── .editorconfig     -- makes sure all text editors use the same convention
├── .eslintrc.js      -- code style guide
├── .gitignore        -- says what files git should ignore.
├── .nvmrc            -- what version of node should be used
├── config.xml        -- global configuration file for cordova application's behavior
└───www               -- Source Code for the app.
    ├── img
    ├── index.html    -- Base index.html that React.js will shove the app into.
    ├── js
    │   ├── index.js    -- entry point of app
    │   ├── containers  -- react components who handle data fetching
    │   ├── components  -- other react components
    │   ├── icons       -- Icon components
    │   ├── actions     -- Redux actions
    │   ├── reducers    -- Redux reducers
    │   └── config.js   -- File with api keys, not git version controlled.
    └── scss            -- All stylings that don't rely on dynamic content

```
