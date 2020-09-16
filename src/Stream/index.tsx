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
import styles from './styles'
import {useSelector} from 'react-redux'
import { State } from '../features/reducers/rootReducer'
import { janusStart, stopWatch, watch } from '../globalFunctions/janus'
import { createLocalePush } from '../globalFunctions/localePush'
import StreamItem from './StreamItem'
import { colors } from '../constants/colors'
import { Actions } from 'react-native-router-flux'

const {width, height} = Dimensions.get('window')

let started = false

Janus.init({
  debug: "all", callback: function () {
    if (started)
      return;
    started = true;
  }
});

const StreamScreen = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const remoteStream = useSelector((state: State) => state.stream.remoteStream)
  const remoteList = useSelector((state: State) => state.stream.remoteList)
  const pluginHandle = useSelector((state: State) => state.stream.remoteListPluginHandle)

  useEffect(() => {
    janusStart()

    return () => {
      const body = { 'request': 'stop' }
      if (pluginHandle) {
        pluginHandle.send({ 'message': body })
        pluginHandle.hangup()
      }
    }
  }, [])

  return (
    <View style={styles.container}>
      {
        remoteList?.map((element, index) => <TouchableOpacity
          key={index}
          onPress={() => {
            console.log('[ELEMENT]: ', element)
            Actions.streamRoom({
              streamId: element.id
            })
          }}
        >
          <StreamItem
            stream={element}
          />
        </TouchableOpacity>
        )
      }
    </View>
  );
};

export default StreamScreen;
