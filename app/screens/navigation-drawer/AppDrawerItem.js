import React from 'react'
import { TouchableHighlight, View } from 'react-native'
import AppText from '../../components/AppText'
import colors from '../../config/colors'
import { styles } from './AppDrawerItem.style'

function AppDrawerItem({ label, Icon, onPress, focused }) {
  return (
    <TouchableHighlight
      underlayColor="#555"
      onPress={onPress}
      style={styles.drewerContainer}
    >
      <View style={styles.container}>
        <AppText
          style={[styles.label, { color: focused ? colors.yellow : '#d4d8f0' }]}
        >
          {label}
        </AppText>
        {Icon}
      </View>
    </TouchableHighlight>
  )
}

export default AppDrawerItem
