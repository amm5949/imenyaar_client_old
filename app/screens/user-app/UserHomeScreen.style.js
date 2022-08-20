import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../config/colors'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const fontScale = Dimensions.get('window').fontScale

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.inputViewBackground,
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
  },

  tabItemView: {
    paddingVertical: 5,
    backgroundColor: colors.inputViewBackground,
    alignItems: 'center',
    flex: 1,
  },

  tabItemLabel: {
    fontSize: 11 / fontScale,
    color: '#2f4b7c',
  },

  tabView: {
    borderRadius: 13,
    borderColor: '#003f5c',
    borderWidth: 1,
    width: '84.6%',
    flexDirection: 'row',
    alignSelf: 'center',
    overflow: 'hidden',
    marginVertical: 10,
  },

  textContainer: {
    width: '100%',
    alignItems: 'center',
    flex: 1,
    marginVertical: 20,
  },

  notFoundContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  WorksContainer: {
    width: '100%',
    flex: 1,
  },
})

export { styles }