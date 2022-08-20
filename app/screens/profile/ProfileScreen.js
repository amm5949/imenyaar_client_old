import React from 'react'
import {
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native'
import { styles } from './ProfileScreen.style'
import AppButton from '../../components/AppButton'
import AppTextInput from '../../components/AppTextInput'
import NavigationIcon from '../../components/icons/NavigationIcon'
import ProfileCard from '../../components/ProfileCard'
import colors from '../../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useState } from 'react'
import AppText from '../../components/AppText'
import * as Yup from 'yup'
import { Formik } from 'formik'
import WebModal from 'modal-enhanced-react-native-web'
import { Platform } from 'react-native'
import { useSelector } from 'react-redux'

let Modal
if (Platform.OS === 'web') Modal = WebModal
else Modal = require('react-native').Modal

const windowHeight = Dimensions.get('window').height
const fontScale = Dimensions.get('window').fontScale

const validationSchema = Yup.object({
  firstname: Yup.string().required('نام خود را وارد کنید'),
  lastname: Yup.string().required('نام خانوادگی خود را وارد کنید'),
  phoneNumber: Yup.string()
    .required('شماره موبایل الزامی است')
    .length(11, 'شماره موبایل معتبر نیست')
    .label('Phone Number'),
})

function ProfileScreen(props) {
  const [showModal, setShowModal] = useState(false)
  const userData = useSelector((state) => state.user)
  console.log(userData, '*****')
  const [information, setInformation] = useState({
    firstname: userData.user.result.first_name,
    lastname: userData.user.result.last_name,
    phoneNumber: userData.user.result.phone_number,
    username: userData.user.result.first_name + userData.user.result.last_name,
  })

  return (
    <View style={styles.container}>
      <Modal
        style={styles.commonStyle}
        animationType="slide"
        transparent={true}
        visible={showModal}
      >
        <View style={styles.pageStyle}>
          <View style={styles.editProfileDetails}>
            <View style={styles.closeButtonStyle}>
              <TouchableOpacity
                onPress={() => setShowModal(false)}
                style={styles.closeButtonPosition}
              >
                <MaterialCommunityIcons
                  name="close-circle"
                  size={30}
                  color={colors.yellow}
                />
              </TouchableOpacity>
              <AppText style={styles.editProfileContainer}>
                ویرایش اطلاعات حساب کاربری
              </AppText>
            </View>
            <Formik
              initialValues={{
                firstname: information.firstname,
                lastname: information.lastname,
                phoneNumber: information.phoneNumber,
              }}
              onSubmit={(values) => {
                console.log(values)
                setInformation({
                  ...values,
                  ...{ username: information.username },
                })
                setShowModal(false)
              }}
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
                  <AppTextInput
                    defaultValue={information.firstname}
                    label="نام"
                    required
                    onBlur={() => setFieldTouched('firstname')}
                    onChangeText={handleChange('firstname')}
                    viewStyle={{
                      borderColor:
                        touched.firstname && errors.firstname ? 'red' : 'black',
                      borderWidth:
                        touched.firstname && errors.firstname ? 2 : 0,
                    }}
                    isWrong={touched.firstname && errors.firstname}
                    onWrongText={errors.firstname}
                    placeholder="مثال : علی "
                    containerStyle={{ width: '100%' }}
                  />
                  <AppTextInput
                    defaultValue={information.lastname}
                    label="نام خانوادگی"
                    required
                    onBlur={() => setFieldTouched('lastname')}
                    onChangeText={handleChange('lastname')}
                    viewStyle={{
                      borderColor:
                        touched.lastname && errors.lastname ? 'red' : 'black',
                      borderWidth: touched.lastname && errors.lastname ? 2 : 0,
                    }}
                    isWrong={touched.lastname && errors.lastname}
                    onWrongText={errors.lastname}
                    placeholder="مثال : اکبر آبادی "
                    containerStyle={{ width: '100%' }}
                  />
                  <AppTextInput
                    defaultValue={information.phoneNumber}
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

                  <AppButton
                    viewStyle={[styles.editButton, { width: 'auto' }]}
                    textStyle={{
                      fontSize: 12 / fontScale,
                      paddingTop: 4,
                      color: colors.white,
                    }}
                    color="#f2c94c"
                    title=" ثبت تغییرات"
                    RightIcon={
                      <MaterialCommunityIcons
                        name="check"
                        size={20}
                        color={colors.white}
                      />
                    }
                    onPress={handleSubmit}
                  />
                </>
              )}
            </Formik>
          </View>
        </View>
      </Modal>
      <ImageBackground
        resizeMode="cover"
        blurRadius={0.5}
        style={styles.profileBackground}
        source={require('../../assets/list_report_screen/sample-profile.jpg')}
      >
        <View style={styles.filterImage} />
        <View style={styles.profileImage}>
          <TouchableOpacity
            onPress={() => props.navigation.openDrawer()}
            style={styles.drawerButton}
          >
            <NavigationIcon color={colors.yellow} size={40} />
          </TouchableOpacity>
          <View style={styles.profileView}>
            <Image
              resizeMode="cover"
              style={styles.backImage}
              source={require('../../assets/list_report_screen/sample-profile.jpg')}
            />
          </View>
        </View>
      </ImageBackground>
      <View style={styles.detailsContainer}>
        <ProfileCard />
      </View>
      <View style={styles.informationContainer}>
        <View>
          <View style={styles.fullnameContainer}>
            <AppTextInput
              containerStyle={{ flex: 1, marginHorizontal: 10 }}
              editable={false}
              label="نام خانوادگی"
              value={information.lastname}
            />
            <AppTextInput
              containerStyle={{ flex: 1, marginHorizontal: 10 }}
              editable={false}
              label="نام"
              value={information.firstname}
            />
          </View>
          <AppTextInput
            containerStyle={{
              marginHorizontal: 10,
            }}
            editable={false}
            label="نام کاربری"
            value={information.username}
          />
        </View>
        <View style={styles.buttomContainer}>
          <AppButton
            viewStyle={styles.exitButton}
            textStyle={[styles.buttonText, { color: colors.yellow }]}
            title="خروج "
            RightIcon={
              <MaterialCommunityIcons
                name="logout"
                color={colors.yellow}
                size={20}
              />
            }
          />
          <AppButton
            onPress={() => setShowModal(true)}
            viewStyle={styles.editButton}
            textStyle={styles.buttonText}
            title="ویرایش حساب"
            RightIcon={
              <MaterialCommunityIcons
                name="square-edit-outline"
                color={colors.white}
                size={20}
              />
            }
          />
        </View>
      </View>
    </View>
  )
}

export default ProfileScreen
