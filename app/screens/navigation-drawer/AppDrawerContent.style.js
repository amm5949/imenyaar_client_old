import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../config/colors'

const fontScale = Dimensions.get('window').fontScale

const styles = StyleSheet.create({
  container: {},
  profileView: {
    padding: 5,
    borderRadius: 5,
    borderColor: '#daa520',
    borderStyle: 'dashed',
    borderWidth: 1,
    marginRight: 10,
    marginLeft: 8,
  },

  nameText: {
    fontSize: 14 / fontScale,
    color: colors.white,
    marginBottom: 5,
  },

  accountText: {
    fontSize: 11 / fontScale,
    color: '#d4d8f0',
  },

  closeButton: {
    alignSelf: 'flex-end',
    marginRight: 10,
  },

  drewerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 40,
  },

  profileImageStyle: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
})

export { styles }
