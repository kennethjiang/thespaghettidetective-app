import React, { useEffect, useState } from 'react'
import {
  TouchableOpacity,
  View,
  Modal, Dimensions,
  Text
} from 'react-native'

import {
  RTCView
} from 'react-native-webrtc'

import Janus from '../../janus'
import {useSelector} from 'react-redux'
import { State } from '../features/reducers/rootReducer'
import { colors } from '../constants/colors'
import { stopWatch, watch } from '../globalFunctions/janus'

const {width, height} = Dimensions.get('window')

interface Props {
    streamId: String
}

const StreamRoom = (props: Props) => {
  const remoteStream = useSelector((state: State) => state.stream.remoteStream)

  useEffect(() => {
    watch(props.streamId)
    return () => {
      stopWatch()
    }
  }, [])

  return (
    <View
        style={{
            flex: 1,
            backgroundColor: colors.backgroundColor,
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        {remoteStream &&
            <RTCView key={'remote'}
                streamURL={remoteStream}
                style={{ width: width, height: height/2 }}
            />
        }
        <Text
            style={{
                marginTop: 20,
                fontSize: 16,
                color: colors.white
            }}
        >Progress: 0%</Text>
    </View>        
  );
};

export default StreamRoom;
