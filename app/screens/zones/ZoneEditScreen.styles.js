import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../config/colors'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const fontScale = Dimensions.get('window').fontScale

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.inputViewBackground,
    flex: 1,
    alignItems: 'center',
  },

  screenView: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  chartView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginLeft: 10,
    marginBottom: 15,
  },

  informationMainText: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginRight: -5,
  },

  detailsText: {
    fontSize: 11 / fontScale,
    color: colors.darkBlue,
    width: 0.58 * windowWidth,
    textAlign: 'right',
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

  textContainer: {
    width: '100%',
    alignItems: 'center',
    flex: 1,
    marginVertical: 20,
  },

  percentView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },

  percent: {
    color: colors.yellow,
    fontSize: 18 / fontScale,
    fontWeight: '500',
  },

  progressbarTitle: {
    fontSize: 12 / fontScale,
    fontWeight: '500',
    fontFamily: 'IranSans',
    color: '#2f4b7c',
  },

  formView: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },

  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 200,
    backgroundColor: colors.yellow,
  },

  headerTitle: {
    fontFamily: 'B Nazanin',
    fontWeight: 'bold',
    position: 'absolute',
    fontSize: 24,
    color: 'black',
  },

  image: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    width: windowWidth / 4,
    height: windowHeight / 2,
    resizeMode: 'contain',
  },

  datePickerContainer: {
    flexDirection: 'row-reverse',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export { styles }
