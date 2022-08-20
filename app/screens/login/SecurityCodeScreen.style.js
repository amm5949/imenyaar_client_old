import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../config/colors'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  scrollViewBackgroundColor: {
    backgroundColor: colors.inputViewBackground,
  },

  button: {
    width: '100%',
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 20,
    backgroundColor: colors.yellow,
  },

  container: {
    // flex: 1,
    backgroundColor: '#201a31',
    justifyContent: 'space-between',
    height: 1 * windowHeight,
    // position: "relative",
  },

  contentContainer: {
    // flex: 1,
  },

  checkbox: {
    borderRadius: 20,
  },

  checkboxText: {
    fontSize: 12,
  },

  forgetPassView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    // direction: "rtl",
    marginBottom: 30,
  },

  imageBackground: {
    width: '100%',
    height: 0.85 * windowHeight,
    // marginBottom: 20,
    alignItems: 'center',
  },

  linkText: {
    fontSize: 15,
    color: '#e04860',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },

  logoIcon: {
    marginTop: 0.03 * windowHeight,
    width: 80,
    height: 80,
  },

  logoText: {
    fontSize: 28,
    color: colors.yellow,
  },

  textInput: {
    borderRadius: 25,
    width: 40,
    height: 40,
    backgroundColor: 'white',
    padding: 10,
    textAlign: 'center',
    borderColor: 'red',
  },

  text: {
    fontSize: 13,
    textAlign: 'center',
    paddingHorizontal: 0.008 * windowWidth,
    marginBottom: 2,
    color: '#333',
  },

  timingText: {
    fontSize: 12,
    color: '#a69d9d',
    marginRight: 8,
    paddingTop: 3,
  },

  timingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },

  alreadyHadAccountStyle: {
    fontSize: 13,
    marginBottom: 10,
  },

  fromHereButton: {
    color: colors.yellow,
    textDecorationLine: 'underline',
  },

  title: {
    fontSize: 20,
    color: colors.black,
    paddingTop: 0.01 * windowHeight,
    paddingBottom: 3,
  },

  rememberMeView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  inputView: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.inputViewBackground,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
  },

  welcomeText: {
    color: colors.white,
    fontSize: 20,
    marginTop: 3,
  },

  codePlaceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
  },

  welcomeDescText: {
    fontSize: 13,
    width: 0.468 * windowWidth,
    textAlign: 'center',
    color: '#ccc',
    fontWeight: '100',
    // marginBottom: 0.15 * windowHeight,
  },
})

export {styles}