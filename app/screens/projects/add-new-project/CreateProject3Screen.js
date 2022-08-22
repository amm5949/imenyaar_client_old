import React from 'react'
import { View, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from './CreateProject3Screen.style'
import AppButton from '../../../components/AppButton'
import AppTextInput from '../../../components/AppTextInput'
import ScreenHeader from '../../../components/ScreenHeader'
import AppCircularProgressBar from '../../../components/AppCircularProgressBar'
import ListItemActions from '../../../components/ListItemActions'
import colors from '../../../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useState } from 'react'
import AppText from '../../../components/AppText'
import * as Yup from 'yup'
import { Formik } from 'formik'
import BackwardArrowIcon from '../../../components/icons/BackwardArrowIcon'
import ListItem from '../../../components/ListItem'
import AppSlider from '../../../components/AppSlider'
import PersonListIcon from '../../../components/icons/PersonListIcon'
import WebModal from 'modal-enhanced-react-native-web'
import { Platform } from 'react-native'
import add_people from '../../../api/projects/add_people'

let Modal
if (Platform.OS === 'web') Modal = WebModal
else Modal = require('react-native').Modal

const windowWidth = Dimensions.get('window').width
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

const initialPersonsArray = [
  {
    id: 0,
    firstname: 'علی',
    lastname: 'هاشمی',
    phoneNumber: '09151550555',
    // username: "@ahmadian_ali",
  },
  {
    id: 1,
    firstname: 'علیرضا',
    lastname: 'علی آبادی',
    phoneNumber: '09151550555',
    // username: "@ahmadian_ali",
  },
  {
    id: 2,
    firstname: 'امیر محمد',
    lastname: 'علی آبادی',
    phoneNumber: '09151550555',
    // username: "@ahmadian_ali",
  },
]

const selectedPerson = {
  id: 0,
  firstname: '',
  lastname: '',
  phoneNumber: '',
}

function CreateProject3Screen(props) {
  const [showModal, setShowModal] = useState(false)
  const [personsArray, setPersonsArray] = useState(initialPersonsArray)
  const projectDetail = props.route.params.projectDetail
  const access_token = props.route.params.access_token

  const add_people_to_project = async () => {
    const values = ref?.current.values
    add_people(projectDetail.id, access_token)
  }

  const handleSubmit = () => {
    props.navigation.navigate('step4')
  }

  return (
    <View style={styles.container}>
      <ScreenHeader
        profilePicture={require('../../../assets/list_report_screen/sample-profile.jpg')}
        headerText="معرفی افراد"
        onPressNavigation={() => props.navigation.openDrawer()}
        props={props}
      />
      <ScrollView
        persistentScrollbar={true}
        style={{
          width: '100%',
          overflow: 'scroll',
        }}
      >
        <View style={styles.screenView}>
          <AppText style={styles.headerTitle}>
            در هر قسمت اطلاعات مورد نیاز را تکمیل کنید
          </AppText>
          <View style={styles.chartView}>
            <AppCircularProgressBar
              percent={0.75}
              color={colors.yellow}
              backgroundColor={colors.inputViewBackground}
              customText="3/4"
              emptyColor="#d5d7e1"
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}
            >
              <AppText style={styles.detailsText}>
                {' '}
                اطلاعات اصلی مانند نام و نام خانوادگی و شماره موبایل فرد مورد
                نظر را وارد کنید
              </AppText>
              <AppText style={[styles.detailsText, { width: 'auto' }]}>
                {' '}
                .3
              </AppText>
            </View>
          </View>

          <AppSlider
            minimumValue={1}
            maximumValue={10}
            label="تعداد افراد مجاز"
          />
          <View style={styles.formView}>
            <View style={styles.flexView}>
              <AppTextInput
                viewStyle={{ width: windowWidth * 0.45 }}
                label="نام"
                required
                placeholder="مثال: علی"
              />

              <AppTextInput
                viewStyle={{ width: windowWidth * 0.45 }}
                label="نام خانوادگی"
                required
                placeholder="مثال: اکبرآبادی"
              />
            </View>

            <AppTextInput
              label="شماره موبایل فرد"
              required
              placeholder="مثال: 123456678"
            />
          </View>
          <AppButton
            title="افزودن فرد"
            RightIcon={
              <MaterialCommunityIcons name="plus" color="#707070" size={30} />
            }
            viewStyle={styles.buttonView}
            textStyle={styles.buttonText}
          />

          <View
            style={{
              width: '100%',
              alignItems: 'center',
              marginBottom: 30,
            }}
          >
            {personsArray.map((item, index) => (
              <View key={index} style={{ width: '100%', alignItems: 'center' }}>
                <ListItem
                  header={item.firstname + ' ' + item.lastname}
                  detailsFirst={'تلفن همراه : ' + item.phoneNumber}
                  IconComponent={<PersonListIcon size={30} />}
                  renderRightActions={(progress, dragx) => (
                    <ListItemActions
                      progress={progress}
                      dragx={dragx}
                      onPressDelete={() =>
                        console.log(item.header, ' deletted')
                      }
                      onPressEdit={() => {
                        console.log(item.id, ' editted')
                        selectedPerson.id = item.id
                        selectedPerson.firstname = item.firstname
                        selectedPerson.lastname = item.lastname
                        selectedPerson.phoneNumber = item.phoneNumber
                        setShowModal(true)
                      }}
                    />
                  )}
                />
              </View>
            ))}

            <Modal
              style={{ margin: 0 }}
              animationType="slide"
              transparent={true}
              visible={showModal}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#000000bb',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    width: '85%',
                    height: 0.7 * windowHeight,
                    backgroundColor: colors.inputViewBackground,
                    borderRadius: 20,
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    paddingHorizontal: 15,
                  }}
                >
                  <View style={{ width: '100%' }}>
                    <TouchableOpacity
                      onPress={() => setShowModal(false)}
                      style={{
                        marginLeft: 10,
                        alignSelf: 'flex-start',
                      }}
                    >
                      <MaterialCommunityIcons
                        name="close-circle"
                        size={30}
                        color={colors.yellow}
                      />
                    </TouchableOpacity>
                    <AppText
                      style={{
                        fontSize: 15 / fontScale,
                        color: colors.darkBlue,
                        alignSelf: 'flex-end',
                      }}
                    >
                      ویرایش اطلاعات فرد
                    </AppText>
                  </View>
                  <Formik
                    initialValues={{
                      firstname: selectedPerson.firstname,
                      lastname: selectedPerson.lastname,
                      phoneNumber: selectedPerson.phoneNumber,
                    }}
                    onSubmit={add_people_to_project}
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
                          defaultValue={selectedPerson.firstname}
                          label="نام"
                          required
                          onBlur={() => setFieldTouched('firstname')}
                          onChangeText={handleChange('firstname')}
                          viewStyle={{
                            borderColor:
                              touched.zoneProperties && errors.zoneProperties
                                ? 'red'
                                : 'black',
                            borderWidth:
                              touched.zoneProperties && errors.zoneProperties
                                ? 2
                                : 0,
                          }}
                          isWrong={touched.firstname && errors.firstname}
                          onWrongText={errors.firstname}
                          containerStyle={{ width: '100%' }}
                        />
                        <AppTextInput
                          defaultValue={selectedPerson.lastname}
                          label="نام خانوادگی"
                          required
                          onBlur={() => setFieldTouched('lastname')}
                          onChangeText={handleChange('lastname')}
                          viewStyle={{
                            borderColor:
                              touched.lastname && errors.lastname
                                ? 'red'
                                : 'black',
                            borderWidth:
                              touched.lastname && errors.lastname ? 2 : 0,
                          }}
                          isWrong={touched.lastname && errors.lastname}
                          onWrongText={errors.lastname}
                          containerStyle={{ width: '100%' }}
                        />

                        <AppTextInput
                          defaultValue={selectedPerson.phoneNumber}
                          label="شماره موبایل فرد"
                          required
                          onBlur={() => setFieldTouched('phoneNumber')}
                          onChangeText={handleChange('phoneNumber')}
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
                          containerStyle={{ width: '100%' }}
                        />

                        <AppButton
                          viewStyle={[styles.editButton]}
                          textStyle={{
                            fontSize: 15,
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
          </View>
        </View>
      </ScrollView>

      <AppButton
        title="ثبت چک لیست"
        color={colors.yellow}
        viewStyle={{ width: '100%' }}
        textStyle={{
          fontSize: 14 / fontScale,
          color: colors.white,
          marginRight: 3,
        }}
        RightIcon={<BackwardArrowIcon size={14} color={colors.white} />}
        onPress={handleSubmit}
      />
    </View>
  )
}

export default CreateProject3Screen
