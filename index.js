/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import Reactotron, {
    trackGlobalErrors,
    openInEditor,
    overlay,
    asyncStorage,
    networking
} from 'reactotron-react-native';

if (__DEV__) {
    Reactotron
        .configure({
            host: '192.168.1.104'
        })
        .use(trackGlobalErrors())
        .use(openInEditor())
        .use(overlay())
        .use(asyncStorage())
        .use(networking())
        .connect()
}

AppRegistry.registerComponent(appName, () => App);
