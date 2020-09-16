import React from 'react'
import {View, ActivityIndicator} from 'react-native'
import {colors} from '../constants/colors'
import globalStyle from '../constants/globalStyle'

interface LoaderProps {
  color?: string
}

export default function Loader(props: LoaderProps) {
  return (
    <View style={globalStyle.loaderView}>
      <ActivityIndicator
        animating={true}
        size="small"
        color={props.color || colors.white}
        style={{flex: 1}}
      />
    </View>
  )
}
