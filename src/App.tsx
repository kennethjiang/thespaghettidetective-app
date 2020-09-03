import React from 'react';
import {
  StatusBar,
  Platform,
} from 'react-native';
import {Provider} from 'react-redux';
import store from './features/reducers/store';
import RootScene from './RootScene';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <Provider store={store}>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      <RootScene />
    </Provider>
  );
};

export default App;
