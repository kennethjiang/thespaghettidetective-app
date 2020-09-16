import React, { createRef, useState } from 'react';
import {
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
  Text, TextInput, TouchableOpacity, Keyboard, NativeSyntheticEvent
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { colors } from '../constants/colors';
import globalStyle from '../constants/globalStyle';
import Loader from '../globalWidgets/Loader';
import { createSocket } from '../services/websocket';
import logInStyles from './styles';
import { WebView, WebViewNavigation } from 'react-native-webview';
import { WebViewMessage } from 'react-native-webview/lib/WebViewTypes';
import { setCookieAction } from '../features/reducers/streams';

const CHECK_COOKIE: string = `
  ReactNativeWebView.postMessage(document.cookie);
  true;
`;

const onNavigationStateChange = async (navigationState: WebViewNavigation) => {
  // Check cookies every time URL changes
  console.log('[navigationState]: ', navigationState)
  if (webViewRef.current) {
    webViewRef.current.injectJavaScript(CHECK_COOKIE);
  }
  if (navigationState.url === 'https://app.thespaghettidetective.com/printers/') {
    try {
      //if (Actions.currentScene !== 'streamScreen') Actions.streamScreen()
      //createSocket()
    } catch (e) {
      console.log('[CREATE SOCKET FAIL]: ', e)
    }
  }
};

const onMessage = (event: NativeSyntheticEvent<WebViewMessage>) => {
  const { data } = event.nativeEvent;
  console.log('[DATA]: ', data)
  setCookieAction(data)
};

let webViewRef = createRef<WebView>();

const LogInScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>(undefined)
  const [loader, setLoader] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [splash, setSplash] = useState<boolean>(true)

  const logIn = async (login) => {
    try {
      //await createSocket()
    } catch (e) {
      console.log('[CREATE SOCKET FAIL]: ', e)
    }
    if (Actions.currentScene !== 'streamScreen') Actions.streamScreen()
  }

  return <WebView
    ref={webViewRef}
    source={{ uri: 'https://app.thespaghettidetective.com/accounts/login/' }}
    onNavigationStateChange={onNavigationStateChange}
    onMessage={onMessage}
  />

  /*return (
    <SafeAreaView style={{flex: 1}}>
      <View style={logInStyles.container}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={{width: '100%', paddingBottom: 120}}>
            <Text style={logInStyles.title}>Welcome to TSD</Text>
            {splash && (
              <>
                <TextInput
                  placeholder="Enter your name"
                  placeholderTextColor={colors.c4}
                  value={phoneNumber}
                  onChangeText={(value) => {
                    setError(false)
                    setPhoneNumber(value)
                  }}
                  style={globalStyle.inputText}
                />
                <TouchableOpacity
                  disabled={loader}
                  style={{width: '100%'}}
                  onPress={() => logIn(phoneNumber)}
                >
                  <View style={logInStyles.button}>
                    {!loader && (
                      <Text style={logInStyles.textBtn}>SIGN IN</Text>
                    )}
                  </View>
                  {loader && <Loader />}
                </TouchableOpacity>
                <TouchableOpacity
                  disabled={loader}
                  style={{width: '100%'}}
                  onPress={() => createSocket()}
                >
                  <View style={logInStyles.button}>
                    {!loader && (
                      <Text style={logInStyles.textBtn}>WEBSOCKET</Text>
                    )}
                  </View>
                  {loader && <Loader />}
                </TouchableOpacity>
                {error && (
                  <Text
                    style={{
                      color: colors.red,
                      alignSelf: 'center',
                      marginTop: 5,
                    }}
                  >
                    Something went wrong
                  </Text>
                )}
              </>
            )}
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  )*/
};

export default LogInScreen;
