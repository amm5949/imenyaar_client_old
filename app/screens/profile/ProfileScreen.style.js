import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../config/colors'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const fontScale = Dimensions.get('window').fontScale

const styles = StyleSheet.create({
  commonStyle: {
    margin: 0,
  },

  pageStyle: {
    flex: 1,
    backgroundColor: '#000000bb',
    justifyContent: 'center',
    alignItems: 'center',
  },

  editProfileDetails: {
    width: '85%',
    height: 0.55 * windowHeight,
    backgroundColor: colors.inputViewBackground,
    borderRadius: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  closeButtonStyle: {
    width: '100%',
  },

  closeButtonPosition: {
    marginLeft: 10,
    alignSelf: 'flex-start',
  },

  editProfileContainer: {
    fontSize: 15 / fontScale,
    color: colors.darkBlue,
    alignSelf: 'flex-end',
  },

  profileImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0.13 * windowHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },

  drawerButton: {
    alignSelf: 'flex-end',
    marginRight: 20,
  },

  backImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },

  detailsContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0.359 * windowHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },

  informationContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
    height: 0.33 * windowHeight,
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  fullnameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },

  buttomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },

  container: {
    backgroundColor: '#eee',
    flex: 1,
  },

  buttonText: {
    fontSize: 10 / fontScale,
    color: colors.white,
  },

  editButton: {
    borderRadius: 5,
    width: 0.302 * windowWidth,
    height: 'auto',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: colors.yellow,
  },

  exitButton: {
    borderRadius: 5,
    width: 0.302 * windowWidth,
    height: 'auto',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: colors.yellow,
  },

  profileBackground: {
    height: 0.453 * windowHeight,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },

  profileView: {
    padding: 5,
    borderRadius: 10,
    borderColor: '#daa520',
    borderStyle: 'dashed',
    borderWidth: 1,
    marginRight: 10,
    marginLeft: 8,
  },

  filterImage: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
})

export {styles}