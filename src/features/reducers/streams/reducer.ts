import {
  ActionType,
  SET_LOCAL_STREAM,
  SET_REMOTE_STREAM,
  RESET_STREAMS,
} from './actions'
import {MediaStream} from 'react-native-webrtc'

export type StreamStateType = {
  localStream: MediaStream
  remoteStream: MediaStream
}

const initialState: StreamStateType = {
  localStream: undefined,
  remoteStream: undefined,
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
    case RESET_STREAMS:
      return initialState
    default:
      return state
  }
}
