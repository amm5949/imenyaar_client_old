import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../../config/colors'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const fontScale = Dimensions.get('window').fontScale

const styles = StyleSheet.create({
  buttonView: {
    marginTop: 15,
    backgroundColor: colors.inputViewBackground,
    width: '100%',
    borderStyle: 'dashed',
    borderRadius: 10,
    borderColor: '#707070',
    borderWidth: 2,
  },

  buttonText: {
    fontSize: 15 / fontScale,
    color: '#707070',
  },

  scrollViewStyle: {
    width: '100%',
    overflow: 'scroll',
  },

  chartView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },

  container: {
    flex: 1,
    backgroundColor: colors.inputViewBackground,
    // alignItems: "center",
  },

  datePickerView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  detailsText: {
    fontSize: 11 / fontScale,
    color: colors.darkBlue,
    width: 0.52 * windowWidth,
    textAlign: 'right',
  },

  formView: {
    flex: 1,
    width: '100%',
    marginBottom: 30,
  },

  headerText: {
    fontSize: 15 / fontScale,
    color: '#58508d',
    marginTop: 10,
  },

  screenView: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  mainTextViewStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
})

export { styles }
