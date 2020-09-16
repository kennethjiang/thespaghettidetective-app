import { Alert } from 'react-native';
import { randomString } from '.';
import Janus from '../../janus';
import store from '../features/reducers/store';
import { setLocalStream, setPluginHandleAction, setPublishAction, setRemoteListAction, setRemoteStream } from '../features/reducers/streams';

let sfutest = null;
let janus;
let started = false;
let host = "10.1.7.19"
//wss://app.stg.thespaghettidetective.com/ws/janus/{printer_id}/
//wss://app.stg.thespaghettidetective.com/ws/shared/janus/3c62e0cbf049c72a8837b7405d32b85c441b/
let server = "wss://app.stg.thespaghettidetective.com/ws/shared/janus/3c62e0cbf049c72a8837b7405d32b85c441b/"
let backHost = "http://" + host + ":3000/stream"
let pin = null;
let myroom = null;
let myid = null;

export function watch(streamId) {
  const pluginHandle = store.getState().stream.remoteListPluginHandle
  const newBody = { 'request': 'watch', id: streamId }
  pluginHandle.send({ 'message': newBody, success: function (res) { console.log('[watch result]: ', res)} })
}

export function stopWatch() {
  const pluginHandle = store.getState().stream.remoteListPluginHandle
  const body = { 'request': 'stop' }
  pluginHandle.send({ 'message': body })
  pluginHandle.hangup()
}

export function janusStart() {
  let sfutest;
  let iceServers = [{urls:['stun:stun.l.google.com:19302']}]
  let turnServer = 'turn.stg.thespaghettidetective.com'
  let janus = new Janus(
    {
      server: server,
      success: () => {
        janus.attach(
          {
            plugin: "janus.plugin.streaming",
            opaqueId: "streamingtest-" + randomString(12),
            success: (pluginHandle) => {
              setPluginHandleAction(pluginHandle);
              sfutest = pluginHandle;
              const body = { 'request': 'list' }
              sfutest.send({
                'message': body, success: function (result) {
                  console.log('[STREAM]: ', result)
                  setRemoteListAction(result.list)
                  /*let stream = result.list[0]
                  let streamId = stream.id
                  const newBody = { 'request': 'watch', id: streamId } //local 10 id
                  sfutest.send({ 'message': newBody, success: function (res) { console.log('[watch result]: ', res)} })*/
                  //console.log('[STREAM]: ', result)
                }
              })
            },
            error: (error) => {
              Alert.alert("  -- Error attaching plugin...", error);
            },
            consentDialog: (on) => {
              console.log('[consentDialog]: ', on)
            },
            mediaState: (medium, on) => {
              console.log('[medium]: ', medium)
            },
            webrtcState: (on) => {
              console.log('[on]: ', on)
            },
            onmessage: (msg, jsep) => {
              console.log('[MESSAGE]: ', msg)
              if (jsep !== undefined && jsep !== null) {
                sfutest.createAnswer(
                  { 
                    jsep: jsep,
                    media: { audioSend: false, videoSend: false, data: true },
                    customizeSdp: function(jsep) {
                      /*if(stereo && jsep.sdp.indexOf("stereo=1") == -1) {
                        // Make sure that our offer contains stereo too
                        jsep.sdp = jsep.sdp.replace("useinbandfec=1", "useinbandfec=1;stereo=1");
                      }*/
                    },
                    success: function(jsep) {
                      Janus.debug("Got SDP!");
                      Janus.debug(jsep);
                      var body = { "request": "start" };
                      console.log('[REQUEST START]')
                      sfutest.send({"message": body, "jsep": jsep});
                    },
                    error: function(error) {
                      Janus.error("WebRTC error:", error);
                    }
                  }
                )
              }
            },
            onlocalstream: (stream) => {
              console.log('[LOCAL STREAM]: ', stream)
              setLocalStream(stream.toURL())
            },
            onremotestream: (stream) => {
              console.log('[REMOTE STREAM]: ', stream)
              setRemoteStream(stream.toURL())
            },
            oncleanup: () => {
            }
          });
      },
      error: (error) => {
        Alert.alert("  Janus Error", error);
      },
      destroyed: () => {
        // Alert.alert("  Success for End Call ");
        setPublishAction(false);
      }
    })
}