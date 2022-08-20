import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../config/colors'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    overflow: 'scroll',
    flex: 1,
    backgroundColor: colors.inputViewBackground,
    alignItems: 'center',
    // paddingTop: StatusBar.currentHeight,
    // direction: "rtl",
    overflow: 'scroll',
    height: windowHeight,
  },

  topContainer: {
    width: '100%',
    alignItems: 'center',
  },

  topRightContainer: {
    alignSelf: 'flex-end',
    paddingHorizontal: 0.019 * windowWidth,
    paddingBottom: 0.056 * windowHeight,
  },

  image: {
    marginTop: 20,
    width: 0.87 * windowWidth,
    height: 0.43 * windowHeight,
    marginBottom: 0.064 * windowHeight,
  },

  text: {
    fontSize: 15,
    color: colors.darkBlue,
    textAlign: 'center',
    marginBottom: 10,
  },

  button: {
    height: 0.06 * windowHeight,
    width: 0.76 * windowWidth,
    marginTop: 0.07 * windowHeight,
    borderRadius: 10,
    backgroundColor: colors.yellow,
  },

  buttonText: {
    fontSize: 14,
    color: colors.white,
  },
})

export { styles }
