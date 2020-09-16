import store from "../features/reducers/store";

const printerId = 1;

export const path = `wss://app.stg.thespaghettidetective.com/ws/web/${printerId}/`

let websocket: WebSocket = undefined

export function createSocket() {
  console.log('Create Socket')
  let cookie: string = store.getState().stream.cookie
  if (cookie) {
    let websocketNew = new WebSocket(path)
    websocketNew.addEventListener('open', openSocketHandler)
    websocketNew.addEventListener('error', errorSocketHandler)
  }
}

function openSocketHandler(this: WebSocket) {
  removeWebsocketHandlers()
  websocket = this
  addWebsocketHandlers()
}

export function closeSocketHandler(e) {
  removeWebsocketHandlers()
}

function removeWebsocketHandlers() {
  if (websocket) {
    console.log('closeWebsocket')
    websocket.removeEventListener('open', openSocketHandler)
    websocket.removeEventListener('message', messageSocketHandler)
    websocket.removeEventListener('error', errorSocketHandler)
    websocket.removeEventListener('close', closeSocketHandler)
    websocket.close()
    websocket = undefined
  }
}

function addWebsocketHandlers() {
  websocket.addEventListener('message', messageSocketHandler)
  websocket.addEventListener('error', errorSocketHandler)
  websocket.addEventListener('close', closeSocketHandler)
}

function errorSocketHandler(error) {
  console.log('error: ', error)
  this.removeEventListener('error', errorSocketHandler)
  if (error.message.indexOf('502') === -1) {
    closeWebsocket(() => {
        recreateSocket()
    })
  } else {
    console.log('Not found socket url')
  }
}

function messageSocketHandler(e) {
    console.log('[WEBSOCKET MESSAGE]: ', e)
    let json = JSON.parse(e.data)
}
  
export function closeWebsocket(action?: () => void) {
if (websocket) {
    console.log('closeWebsocket')
    websocket.removeEventListener('open', openSocketHandler)
    websocket.removeEventListener('message', messageSocketHandler)
    websocket.removeEventListener('error', errorSocketHandler)
    websocket.removeEventListener('close', closeSocketHandler)
    websocket.close()
    websocket = undefined
}
if (action) {
    action()
}
}

function recreateSocket() {
    try {
        createSocket()
    } catch (e) {
        console.log('[ERROR]: ', e)
        recreateSocket()
    }
}