import React from 'react'
import {Router, Scene} from 'react-native-router-flux'
import { colors } from './constants/colors'
import LogInScreen from './LogInScreen'
import StreamScreen from './Stream'
import StreamRoom from './StreamRoom'

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
          key="streamScreen"
          component={StreamScreen}
          navBarButtonColor={colors.white}
          title='Streams'
          titleStyle={{color: colors.white}}
        />
        <Scene
          key='streamRoom'
          component={StreamRoom}
          navBarButtonColor={colors.white}
          title='Stream Room'
          titleStyle={{color: colors.white}}
        />
      </Scene>
    </Router>
  )
}
