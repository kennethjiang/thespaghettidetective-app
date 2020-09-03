import React from 'react'
import {Router, Scene} from 'react-native-router-flux'
import LogInScreen from './LogInScreen'
import StreamScreen from './Stream'

export default function RootScene() {
  return (
    <Router>
      <Scene key="root">
        <Scene
          initial
          key="logInScreen"
          component={LogInScreen}
          hideNavBar
          gesturesEnabled={false}
        />
        <Scene
          gesturesEnabled={false}
          key="conversationsScreen"
          component={StreamScreen}
          hideNavBar
        />
      </Scene>
    </Router>
  )
}
