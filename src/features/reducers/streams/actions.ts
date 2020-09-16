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

export function setPublishAction(value: boolean) {
  store.dispatch(setPublish(value))
}

export function setRemoteListAction(value: any) {
  store.dispatch(setRemoteList(value))
}

export function setPluginHandleAction(value: any) {
  store.dispatch(setPluginHandle(value))
}

export function setCookieAction(value: any) {
  store.dispatch(setCookie(value))
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

function setPublish(value: any) {
  return {
    type: SET_LOCAL_STREAM,
    payload: value,
  }
}

function setRemoteList(value: any) {
  return {
    type: SET_REMOTE_LIST,
    payload: value
  }
}

function setPluginHandle(value: any) {
  return {
    type: SET_PLUGIN_HANDLE,
    payload: value
  }
}

function setCookie(value: any) {
  return {
    type: SET_COOKIE,
    payload: value
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
export const SET_PUBLISH = 'SET_PUBLISH'
export const SET_REMOTE_LIST = 'SET_REMOTE_LIST'
export const SET_PLUGIN_HANDLE = 'SET_PLUGIN_HANDLE'
export const SET_COOKIE = 'SET_COOKIE'

interface StreamsType {
  type:
    | typeof RESET_STREAMS
    | typeof SET_LOCAL_STREAM
    | typeof SET_REMOTE_STREAM
    | typeof SET_PUBLISH
    | typeof SET_REMOTE_LIST
    | typeof SET_PLUGIN_HANDLE
    | typeof SET_COOKIE
  payload: any
}

export type ActionType = StreamsType
