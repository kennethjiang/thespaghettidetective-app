import store from '../store'

export function setLocalStream(value: any) {
  store.dispatch(setLocal(value))
}

export function setRemoteStream(value: any) {
  store.dispatch(setRemote(value))
}

export function resetStreamsAction() {
  store.dispatch(resetStreams())
}

function setRemote(value: any) {
  return {
    type: SET_REMOTE_STREAM,
    payload: value,
  }
}

function setLocal(value: any) {
  return {
    type: SET_LOCAL_STREAM,
    payload: value,
  }
}

function resetStreams() {
  return {
    type: RESET_STREAMS,
  }
}

export const SET_LOCAL_STREAM = 'SET_LOCAL_STREAM'
export const SET_REMOTE_STREAM = 'SET_REMOTE_STREAM'
export const RESET_STREAMS = 'RESET_STREAMS'

interface StreamsType {
  type:
    | typeof RESET_STREAMS
    | typeof SET_LOCAL_STREAM
    | typeof SET_REMOTE_STREAM
  payload: any
}

export type ActionType = StreamsType
