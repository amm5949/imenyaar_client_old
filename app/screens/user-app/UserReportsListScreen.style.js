import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../config/colors'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const fontScale = Dimensions.get('window').fontScale

const styles = StyleSheet.create({
  generalStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  scrollViewStyle: {
    width: '100%',
    marginTop: 25,
  },

  container: {
    backgroundColor: colors.inputViewBackground,
    flex: 1,
    alignItems: 'center',
  },

  emptyListImage: {
    width: 0.87 * windowWidth,
    height: 0.29 * windowHeight,
    marginTop: 0.055 * windowHeight,
    marginBottom: 15,
  },

  notFoundText: {
    fontSize: 15 / fontScale,
    color: colors.darkBlue,
    fontFamily: 'iran-sans-regular',
  },

  textContainer: {
    width: '100%',
    alignItems: 'center',
  },

  addButtonView: {
    alignSelf: 'flex-end',
    marginBottom: 10,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
})

export { styles }
