import React, { useRef } from 'react'
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native'
import { Formik } from 'formik'
import AppButton from '../../components/AppButton'
import AppTextInput from '../../components/AppTextInput'
import colors from '../../config/colors'
import BackwardArrowIcon from '../../components/icons/BackwardArrowIcon'
import { updateZone } from '../../api/zones/update'
import { useSelector } from 'react-redux'
import { updatePeople } from '../../api/people/update'
import { styles } from './PeopleEditScreen.style'

const fontScale = Dimensions.get('window').fontScale
const windowHeight = Dimensions.get('window').height

function PeopleEditScreen(props) {
  const ref = useRef()
  console.log(props)
  const item = props.route.params
  const userData = useSelector((state) => state.user)

  const handleSubmit = async (values) => {
    const data = {
      ...values,
      password: item.password,
      // project_id: item.project_id,
    }
    console.log(data)

    await updatePeople(userData?.user.result.tokens.access_token, item.id, data)
    props.navigation.navigate('People', {
      screen: 'PeopleList',
    })
  }
  return (
    <Formik
      initialValues={{
        first_name: '',
        last_name: '',
        phone_number: '',
        password: '',
        role: '',
      }}
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
                source={require('../../assets/list_report_screen/change.png')}
                style={styles.image}
              />
              <Text style={styles.headerTitle}>ویرایش اطلاعات</Text>
            </View>

            <View style={styles.formView}>
              <AppTextInput
                label="نام"
                onBlur={() => setFieldTouched('first_name')}
                onChangeText={handleChange('first_name')}
                required
                value={item.first_name}
                containerStyle={{ width: '100%' }}
              />
              <AppTextInput
                label="نام خانوادگی"
                required
                onBlur={() => setFieldTouched('last_name')}
                onChangeText={handleChange('last_name')}
                value={item.last_name}
                containerStyle={{ width: '100%' }}
              />
              <AppTextInput
                label="شماره تلفن"
                required
                onBlur={() => setFieldTouched('phone_number')}
                onChangeText={handleChange('phone_number')}
                value={item.phone_number}
                containerStyle={{ width: '100%' }}
              />
              {/* <AppTextInput
                label="رمز عبور"
                required
                onBlur={() => setFieldTouched("password")}
                onChangeText={handleChange("password")}
                value={item.password}
              /> */}
              <AppTextInput
                label="نقش"
                required
                onBlur={() => setFieldTouched('role')}
                onChangeText={handleChange('role')}
                value={item.role}
                containerStyle={{ width: '100%' }}
              />
            </View>
          </ScrollView>
          <AppButton
            title="ویرایش"
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

export default PeopleEditScreen
