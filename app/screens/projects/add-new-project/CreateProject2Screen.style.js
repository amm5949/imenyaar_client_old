import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../../config/colors'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const fontScale = Dimensions.get('window').fontScale

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.inputViewBackground,
    flex: 1,
    alignItems: 'center',
  },
  editButton: {
    borderRadius: 5,
    width: '90%',
    height: 'auto',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 30,
    backgroundColor: colors.yellow,
  },
  screenView: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: 15 / fontScale,
    color: '#58508d',
    marginTop: 10,
  },
  chartView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginRight: 10,
  },
  detailsText: {
    fontSize: 11 / fontScale,
    color: colors.darkBlue,
    width: 0.6 * windowWidth,
    textAlign: 'right',
  },
  formView: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-evenly',
    marginBottom: 15,
    minHeight: 0.4 * windowHeight,
  },
  buttonView: {
    backgroundColor: colors.inputViewBackground,
    width: '100%',
    borderStyle: 'dashed',
    borderRadius: 10,
    borderColor: '#707070',
    borderWidth: 2,
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 15 / fontScale,
    color: '#707070',
  },
})

export { styles }
