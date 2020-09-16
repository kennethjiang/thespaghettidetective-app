import {
  ActionType,
  SET_LOCAL_STREAM,
  SET_REMOTE_STREAM,
  RESET_STREAMS,
  SET_PUBLISH,
  SET_REMOTE_LIST,
  SET_PLUGIN_HANDLE,
  SET_COOKIE
} from './actions'
import {MediaStream} from 'react-native-webrtc'

export type StreamStateType = {
  localStream: MediaStream
  remoteStream: MediaStream
  info: String
  status: String
  roomID: String
  isFront: boolean
  remoteList: any
  remoteListPluginHandle: any
  textRoomConnected: boolean
  textRoomData: []
  textRoomValue: String
  publish: boolean
  speaker: boolean
  audioMute: boolean
  videoMute: boolean
  visible: boolean
  buttonText: String
  streamState: String
  cookie: any
}

const initialState: StreamStateType = {
  localStream: undefined,
  remoteStream: undefined,
  info: 'Initializing',
  status: 'init',
  roomID: '',
  isFront: true,
  remoteList: undefined,
  remoteListPluginHandle: undefined,
  textRoomConnected: false,
  textRoomData: [],
  textRoomValue: '',
  publish: false,
  speaker: false,
  audioMute: false,
  videoMute: false,
  visible: false,
  buttonText: "Start for Janus !!!",
  streamState: '',
  cookie: undefined
}

export default (state: StreamStateType = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_LOCAL_STREAM:
      return {
        ...state,
        localStream: action.payload,
      }
    case SET_REMOTE_STREAM:
      return {
        ...state,
        remoteStream: action.payload,
      }
    case SET_PUBLISH:
      return {
        ...state,
        publish: action.payload
      }
    case SET_REMOTE_LIST:
      return {
        ...state,
        remoteList: action.payload
      }
    case SET_PLUGIN_HANDLE:
      return {
        ...state,
        remoteListPluginHandle: action.payload
      }
    case SET_COOKIE:
      return {
        ...state,
        cookie: action.payload
      }
    case RESET_STREAMS:
      return initialState
    default:
      return state
  }
}
