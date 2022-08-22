import { Dimensions, StyleSheet, StatusBar } from 'react-native'
import colors from '../../config/colors'

const windowHeight = Dimensions.get('window').height
const fontScale = Dimensions.get('window').fontScale

const styles = StyleSheet.create({
  mainBackgroundColor: {
    backgroundColor: 'white',
  },

  scrollViewStyle: {
    width: '100%',
  },

  sendPhotoAndAudioView: {
    width: '100%',
    marginBottom: 10,
  },

  cardView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 5,
  },

  container: {
    backgroundColor: '#201a31',
    justifyContent: 'space-between',
    height:
      windowHeight +
      (StatusBar.currentHeight > 33 ? StatusBar.currentHeight : 0),
  },

  descriptionView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 19,
  },

  detailsView: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    paddingTop: 10,
    maxHeight: 0.832 * windowHeight,
  },

  headerView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },

  headerText: {
    fontSize: 14 / fontScale,
    color: colors.black,
    marginRight: 10,
  },

  imageBackground: {
    width: '100%',
    height: 0.5 * windowHeight,
    // marginBottom: 20,
    alignItems: 'flex-start',
  },

  backButton: {
    marginLeft: 25,
    marginTop: 25,
    width: 50,
    height: 50,
    opacity: 1,
  },

  imageSectionHeaderText: {
    fontSize: 10.5 / fontScale,
    width: '80%',
    color: '#7a7c83',
    marginRight: 10,
  },

  imageSectionHeaderView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 8,
  },

  text: {
    fontSize: 10.5 / fontScale,
    textAlign: 'right',
    width: '84%',
    marginRight: 10,
    color: '#333',
  },

  textView: {
    marginTop: 15,
    marginBottom: 10,
  },

  uploadAudioView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#f0f2f8',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },

  uploadAudioText: {
    fontSize: 11 / fontScale,
    color: colors.darkBlue,
  },
})

export { styles }