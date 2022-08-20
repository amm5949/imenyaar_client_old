import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { View } from 'react-native'
import ActivateAccountCard from '../../components/ActivateAccountCard'
import AppButton from '../../components/AppButton'
import AppText from '../../components/AppText'
import CircularIcon from '../../components/CircularIcon'
import colors from '../../config/colors'
import { styles } from './ActivateAccountScreen.style'

function ActivateAccountScreen(props) {
  const [type, setType] = useState('gold')
  return (
    <View style={styles.container}>
      <AppText style={styles.headerText}>فعال سازی حساب</AppText>
      <AppText style={styles.text}>
        یکی از حساب های موجود را انتخاب نمایید
      </AppText>
      <ActivateAccountCard type={type} navigation={props.navigation} />
      <View style={styles.buttonContainer}>
        <View style={styles.bothButtonsContainer}>
          <AppText
            style={
              type === 'gold'
                ? styles.lowColorPreviosButton
                : styles.highColorPreviosButton
            }
          >
            قبلی
          </AppText>
          <CircularIcon
            Icon={
              <MaterialCommunityIcons
                name="arrow-left-bold"
                size={35}
                color="white"
              />
            }
            size={45}
            onPress={() => {
              if (type === 'gold') return
              if (type === 'silver') setType('gold')
              else setType('silver')
            }}
            color={colors.yellow}
            style={
              type === 'gold'
                ? styles.lowColorButtonStyle
                : styles.highColorButtonStyle
            }
          />
        </View>
        <View style={styles.bothButtonsContainer}>
          <CircularIcon
            Icon={
              <MaterialCommunityIcons
                name="arrow-right-bold"
                size={35}
                color="white"
              />
            }
            size={45}
            onPress={() => {
              if (type === 'bronze') return
              if (type === 'gold') setType('silver')
              else setType('bronze')
            }}
            color={colors.yellow}
            style={
              type === 'bronze'
                ? styles.lowColorButtonStyle
                : styles.highColorButtonStyle
            }
          />
          <AppText
            style={
              type === 'bronze'
                ? styles.lowColorPreviosButton
                : styles.highColorPreviosButton
            }
          >
            بعدی
          </AppText>
        </View>
      </View>
      <AppButton
        title="۷ روز استفاده رایگان"
        viewStyle={styles.button}
        textStyle={styles.buttonText}
        onPress={() => props.navigation.navigate('ConfirmPurchaseScreen')}
      />
    </View>
  )
}

export default ActivateAccountScreen
