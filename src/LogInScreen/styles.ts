import {StyleSheet} from 'react-native'
import { colors } from '../constants/colors'

const logInStyles = StyleSheet.create({
  title: {
    fontSize: 34,
    letterSpacing: -0.3,
    textAlign: 'center',
    marginBottom: 80,
  },
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: colors.purpleBtn,
    height: 36,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    fontSize: 17,
    letterSpacing: -0.3,
    color: colors.white,
  },
})

export default logInStyles
