import React from 'react';
import {
  StatusBar,
  Platform,
} from 'react-native';
import {Provider} from 'react-redux';
import store from './features/reducers/store';
import RootScene from './RootScene';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <Provider store={store}>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      <NavigationContainer>
        <RootScene />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
