import React, { useRef } from 'react'
import { View, Text, Dimensions, ScrollView, Image } from 'react-native'
import { Formik } from 'formik'
import AppButton from '../../components/AppButton'
import AppTextInput from '../../components/AppTextInput'
import { styles } from './ZoneCreateScreen.style.js'
import colors from '../../config/colors'
import BackwardArrowIcon from '../../components/icons/BackwardArrowIcon'
import { useSelector } from 'react-redux'
import { createZone } from '../../api/zones/create'

const windowHeight = Dimensions.get('window').height
const fontScale = Dimensions.get('window').fontScale

const ZoneCreateScreen = (props) => {
  const ref = useRef()
  console.log(props)
  const userData = useSelector((state) => state.user)

  const handleSubmit = async (values) => {
    values = {
      ...values,
      project_id: parseInt(values.project_id),
    }
    await createZone(userData?.user.result.tokens.access_token, values)
    props.navigation.navigate('Zones', {
      screen: 'ZoneList',
    })
    console.log('here')
  }
  return (
    <Formik
      initialValues={{ name: '', project_id: '', properties: '', details: '' }}
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
              <Image
                source={require('../../assets/list_report_screen/add.png')}
                style={styles.image}
              />
              <Text style={styles.headerTitle}>ایجاد زون</Text>
            </View>
            <View style={styles.formView}>
              <AppTextInput
                label="نام زون"
                onBlur={() => setFieldTouched('name')}
                onChangeText={handleChange('name')}
                required
                containerStyle={{ width: '100%' }}
              />
              <AppTextInput
                label="properties"
                onBlur={() => setFieldTouched('properties')}
                onChangeText={handleChange('properties')}
                required
                containerStyle={{ width: '100%' }}
              />
              <AppTextInput
                label="project_id"
                onBlur={() => setFieldTouched('project_id')}
                onChangeText={handleChange('project_id')}
                required
                containerStyle={{ width: '100%' }}
              />
              <AppTextInput
                label="جزئیات"
                required
                onBlur={() => setFieldTouched('details')}
                onChangeText={handleChange('details')}
                containerStyle={{ width: '100%' }}
              />
            </View>
          </ScrollView>
          <AppButton
            title="ایجاد زون"
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

export default ZoneCreateScreen
