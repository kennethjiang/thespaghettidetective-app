import {StyleSheet} from 'react-native'
import {colors} from '../constants/colors'

const globalStyle = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerGradient: {
    marginRight: 8,
    width: 31,
    height: 31,
    borderRadius: 31,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    width: 28,
    height: 28,
    borderRadius: 28,
    backgroundColor: colors.white04,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headreName: {
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
    color: colors.nameText,
  },
  image: {
    width: 28,
    height: 28,
  },
  loaderView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    width: '100%',
    color: colors.white,
    letterSpacing: -0.3,
    borderColor: colors.da,
    borderWidth: 1,
    borderRadius: 24,
    height: 36,
    backgroundColor: colors.white,
    marginBottom: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
})

export default globalStyle