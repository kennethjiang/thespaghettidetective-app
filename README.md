## Requirements

[Node.js](https://nodejs.org/en/) Probably best to use a tool like [nvm](https://github.com/nvm-sh/nvm)\
Yarn\
[CocoaPods](https://cocoapods.org/)\
[Xcode](https://developer.apple.com/xcode/) 11.3.1 or higher\
[Android Studio](https://developer.android.com/studio) 3.5.3 or higher (optional)

## Setup (Mac-specific; other options are possible)

- Install [Xcode](https://developer.apple.com/xcode/)
- `sudo xcode-select --switch /Applications/Xcode.app`
- Install [Homebrew](https://brew.sh/)
- `brew install nvm yarn watchman awscli gpg2`
- `brew tap AdoptOpenJDK/openjdk`
- `brew cask install adoptopenjdk8`
- `aws configure`
- `yarn global add react-native-cli`
- Install [RVM](https://rvm.io/)
- `rvm install 2.7`
- `rvm use 2.7 --default`
- `rvm gemset use bach-app --create`
- `gem install cocoapods`
- `yarn install`

### React Native

### iOS

- `cd ios`
- `pod install`
- `cd -`
- `yarn build`
- `react-native run-ios`

### Android

- [Install Java](https://www.oracle.com/java/technologies/javase-downloads.html)
- [Install Android Studio](https://developer.android.com/studio)
- Import existing project into Android Studio and select folder mennatech.bach.mvp/android
- [Follow this tutorial](https://medium.com/@wnyao0830/run-create-react-native-app-on-android-studios-emulator-ad678a0c362f)
  - I highly recommend following the steps to set the environment variable on MacOS to launch the emulator with cli commands
- Open Android Studio -> preferences -> Appearance & Behavior -> System Settings -> Android SDK-> SDK Tools (2nd tab)
  - additionally check NDK (Side by side), Android SDK Command-line tools, and Google Play Licensing Library and press "OK"
- run `react-native run-android` in the root directory
