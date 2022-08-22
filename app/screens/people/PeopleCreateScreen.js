import React, { useRef } from 'react'
import { View, Dimensions, ScrollView, Image, Text } from 'react-native'
import { Formik } from 'formik'
import AppButton from '../../components/AppButton'
import AppTextInput from '../../components/AppTextInput'
import colors from '../../config/colors'
import BackwardArrowIcon from '../../components/icons/BackwardArrowIcon'
import { useSelector } from 'react-redux'
import { createUser } from '../../api/people/create'
import PeopleStack from './PeopleStack'
import { styles } from './PeopleCreateScreen.style'
import CircularIcon from '../../components/CircularIcon'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const windowHeight = Dimensions.get('window').height
const fontScale = Dimensions.get('window').fontScale

const PeopleCreateScreen = (props) => {
  const ref = useRef()
  console.log(props)
  const userData = useSelector((state) => state.user)

  const handleSubmit = async (values) => {
    const userValues = {
      ...values,
    }

    await createUser(userData?.user.result.tokens.access_token, userValues)
    props.navigation.goBack()

    console.log('here')
  }
  return (
    <Formik
      initialValues={{ first_name: '', last_name: '', phone_number: '' }}
      onSubmit={handleSubmit}
      innerRef={ref}
    >
      {({
        handleChange,
        handleSubmit,
        errors,
        setFieldTouched,
        touched,
        enableReinitialize,
      }) => (
        <View style={styles.screenView}>
          <ScrollView
            contentContainerStyle={{
              flex: 1,
              minHeight: 0.55 * windowHeight,
              width: '100vw',
            }}
          >
            <View style={styles.imageContainer}>
              <CircularIcon
                Icon={
                  <MaterialCommunityIcons
                    name="arrow-left-bold"
                    size={35}
                    color="white"
                  />
                }
                size={45}
                onPress={() => props.navigation.goBack()}
                color={'black'}
                style={styles.backButton}
              />
              <Text style={styles.headerTitle}>افزودن فرد</Text>
              <Image
                source={require('../../assets/list_report_screen/add-contact-icon.png')}
                style={styles.image}
              />
            </View>
            <View style={styles.formView}>
              <AppTextInput
                label="نام"
                onBlur={() => setFieldTouched('first_name')}
                onChangeText={handleChange('first_name')}
                required
                containerStyle={{ width: '100%' }}
              />
              <AppTextInput
                label="نام خانوادگی"
                onBlur={() => setFieldTouched('last_name')}
                onChangeText={handleChange('last_name')}
                required
                containerStyle={{ width: '100%' }}
              />
              <AppTextInput
                label="شماره تلفن"
                onBlur={() => setFieldTouched('phone_number')}
                onChangeText={handleChange('phone_number')}
                required
                containerStyle={{ width: '100%' }}
              />
            </View>
          </ScrollView>
          <AppButton
            title="افزودن فرد"
            color={colors.yellow}
            viewStyle={{
              width: '100%',
            }}
            textStyle={{
              fontSize: 14 / fontScale,
              color: colors.white,
              marginRight: 3,
            }}
            RightIcon={<BackwardArrowIcon size={14} color={colors.white} />}
            onPress={handleSubmit}
          />
        </View>
      )}
    </Formik>
  )
}

export default PeopleCreateScreen
