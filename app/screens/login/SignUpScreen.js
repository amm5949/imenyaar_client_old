import React, { useState } from 'react'
import {
  Image,
  ImageBackground,
  ScrollView,
  View,
  Platform,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Formik } from 'formik'
import * as Yup from 'yup'

import AppText from '../../components/AppText'
import AppButton from '../../components/AppButton'
import AppTextInput from '../../components/AppTextInput'
import WinkedCloseIcon from '../../components/icons/WinkedCloseIcon'
import WinkedOpenIcon from '../../components/icons/WinkedOpenIcon'
import colors from '../../config/colors'
import { TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { register } from '../../api/auth'
import { Header } from 'react-navigation-stack'
import AppWarningModal from '../../components/AppWarningModal'
import { styles } from './SignUpScreen.style'

const validationSchema = Yup.object({
  firstname: Yup.string().required('نام خود را وارد کنید'),
  lastname: Yup.string().required('نام خانوادگی خود را وارد کنید'),
  phoneNumber: Yup.string()
    .required('شماره موبایل الزامی است')
    .length(11, 'شماره موبایل معتبر نیست')
    .label('Phone Number'),
  organizationName: Yup.string(),
  password: Yup.string()
    .required('رمز عبور نمیتواند خالی بماند')
    .min(6, 'رمز عبور باید حداقل ۶ حرف باشد')
    .max(15, 'رمز عبور باید حداکثر ۱۵ حرف باشد')
    .label('Password'),
})

export default function SignUpScreen(props) {
  const [passVisible, setPassVisible] = useState(true)
  const [visible, setVisible] = useState(false)
  const [modalText, setModalText] = useState('')

  const handleSubmit = (values) => {
    console.log('submited values: ', values)
    register(values)
      .then((response) => {
        console.log('register response: ', response)
        props.navigation.navigate('SecurityCodeScreen', {
          phoneNumber: values.phoneNumber,
        })
      })
      .catch((error) => {
        console.log(error.response.data.message.fa)
        setModalText(error.response.data.message.fa)
        setVisible(true)
      })
  }

  return (
    <KeyboardAvoidingView
      style={styles.contentContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView style={styles.scrollViewStyle}>
        <AppWarningModal
          visible={visible}
          detailText={modalText}
          onPress={() => setVisible(false)}
        />
        <View style={styles.container}>
          <ImageBackground
            source={require('../../assets/login-screen/login.png')}
            style={styles.imageBackground}
            resizeMode="cover"
          >
            <Image
              source={require('../../assets/login-screen/logo.png')}
              style={styles.logoIcon}
            />
            <AppText style={styles.logoText}>ایمن یار</AppText>
            <AppText style={styles.welcomeText}>خوش آمدید</AppText>
            <AppText style={styles.welcomeDescText}>
              برای داشتن یک ساختمون خوب نیاز به یک برنامه مدیریت خوب داری
            </AppText>
          </ImageBackground>
          <View style={styles.inputView}>
            <AppText style={styles.title}>ساخت حساب کاربری</AppText>

            <Formik
              initialValues={{
                firstname: '',
                lastname: '',
                phoneNumber: '',
                organizationName: '',
                password: '',
              }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {({
                handleChange,
                handleSubmit,
                errors,
                setFieldTouched,
                touched,
              }) => (
                <>
                  <View style={styles.rowTextInput}>
                    <AppTextInput
                      label="نام"
                      required
                      onBlur={() => setFieldTouched('firstname')}
                      onChangeText={handleChange('firstname')}
                      viewStyle={{
                        // width: 0.43 * windowWidth,
                        borderColor:
                          touched.firstname && errors.firstname
                            ? 'red'
                            : 'black',
                        borderWidth:
                          touched.firstname && errors.firstname ? 2 : 0,
                      }}
                      isWrong={touched.firstname && errors.firstname}
                      onWrongText={errors.firstname}
                      placeholder="مثال : علی "
                      containerStyle={{ flex: 1, marginLeft: 20 }}
                    />
                    <AppTextInput
                      label="نام خانوادگی"
                      required
                      onBlur={() => setFieldTouched('lastname')}
                      onChangeText={handleChange('lastname')}
                      viewStyle={{
                        // width: 0.43 * windowWidth,
                        borderColor:
                          touched.lastname && errors.lastname ? 'red' : 'black',
                        borderWidth:
                          touched.lastname && errors.lastname ? 2 : 0,
                      }}
                      isWrong={touched.lastname && errors.lastname}
                      onWrongText={errors.lastname}
                      placeholder="مثال : اکبر آبادی "
                      containerStyle={{ flex: 1 }}
                    />
                  </View>
                  <AppTextInput
                    label="شماره موبایل"
                    required
                    onBlur={() => setFieldTouched('phoneNumber')}
                    onChangeText={handleChange('phoneNumber')}
                    keyboardType="numeric"
                    viewStyle={{
                      borderColor:
                        touched.phoneNumber && errors.phoneNumber
                          ? 'red'
                          : 'black',
                      borderWidth:
                        touched.phoneNumber && errors.phoneNumber ? 2 : 0,
                    }}
                    isWrong={touched.phoneNumber && errors.phoneNumber}
                    onWrongText={errors.phoneNumber}
                    placeholder="مثال : 09153698888 "
                    containerStyle={{ width: '100%' }}
                  />
                  <AppTextInput
                    label="نام شرکت یا سازمان"
                    onBlur={() => setFieldTouched('organizationName')}
                    onChangeText={handleChange('organizationName')}
                    placeholder="مثال : شرکت عمرانی و ساختمانی مهر نو "
                    containerStyle={{ width: '100%' }}
                  />
                  <AppTextInput
                    label="رمز عبور"
                    required
                    LeftIcon={
                      !passVisible ? (
                        <TouchableOpacity onPress={() => setPassVisible(true)}>
                          <WinkedOpenIcon color="#999" size={20} />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity onPress={() => setPassVisible(false)}>
                          <WinkedCloseIcon color="#999" size={20} />
                        </TouchableOpacity>
                      )
                    }
                    textContentType="password"
                    secureTextEntry={passVisible}
                    onBlur={() => setFieldTouched('password')}
                    onChangeText={handleChange('password')}
                    viewStyle={{
                      borderColor:
                        touched.password && errors.password ? 'red' : 'black',
                      borderWidth: touched.password && errors.password ? 2 : 0,
                    }}
                    isWrong={touched.password && errors.password}
                    onWrongText={errors.password}
                    containerStyle={{ width: '100%' }}
                  />

                  <AppButton
                    viewStyle={styles.button}
                    textStyle={{
                      fontSize: 15,
                      color: colors.white,
                    }}
                    color="#f2c94c"
                    title=" دریافت کد فعال سازی"
                    RightIcon={
                      <MaterialCommunityIcons
                        name="chevron-right"
                        size={20}
                        color={colors.white}
                      />
                    }
                    onPress={handleSubmit}
                  />

                  <AppText style={styles.alreadyHadAccountStyle}>
                    حساب دارید؟ از
                    <AppText
                      style={styles.fromHereButton}
                      onPress={() => props.navigation.navigate('LogInScreen')}
                    >
                      {' '}
                      اینجا{' '}
                    </AppText>
                    وارد شوید
                  </AppText>
                </>
              )}
            </Formik>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
