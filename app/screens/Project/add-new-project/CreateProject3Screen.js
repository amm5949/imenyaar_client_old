import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Modal,
  ScrollView
} from "react-native";
import AppButton from "../../../components/AppButton";
import AppTextInput from "../../../components/AppTextInput";
import ScreenHeader from "../../../components/ScreenHeader";
import AppCircularProgressBar from "../../../components/AppCircularProgressBar";
import ListItemActions from "../../../components/ListItemActions";
import colors from "../../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import AppText from "../../../components/AppText";
import * as Yup from "yup";
import { Formik } from "formik";
import BackwardArrowIcon from "../../../components/icons/BackwardArrowIcon";
import ListItem from "../../../components/ListItem";
import AppSlider from "../../../components/AppSlider";
import PersonListIcon from "../../../components/icons/PersonListIcon";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const validationSchema = Yup.object({
  firstname: Yup.string().required("نام خود را وارد کنید"),
  lastname: Yup.string().required("نام خانوادگی خود را وارد کنید"),
  phoneNumber: Yup.string()
    .required("شماره موبایل الزامی است")
    .length(11, "شماره موبایل معتبر نیست")
    .label("Phone Number"),
});

const initialPersonsArray = [
  {
    id: 0,
    firstname: "علی",
    lastname: "هاشمی",
    phoneNumber: "09151550555",
    // username: "@ahmadian_ali",
  },
  {
    id: 1,
    firstname: "علیرضا",
    lastname: "علی آبادی",
    phoneNumber: "09151550555",
    // username: "@ahmadian_ali",
  }
]

function CreateProject3Screen(props) {
  const [showModal, setShowModal] = useState(false);
  const [personsArray, setPersonsArray] = useState(initialPersonsArray);
  
  return (
    <View style={styles.container}>
      <ScreenHeader
        profilePicture={require("../../../assets/list_report_screen/sample-profile.jpg")}
        headerText="معرفی افراد"
        onPressNavigation={() => props.navigation.openDrawer()}
      />
      <ScrollView 
          persistentScrollbar={true}
          style={{
            width: "100%",
            overflow: "scroll",
          }} >
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
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <AppText style={styles.detailsText}>
                {" "}
                اطلاعات اصلی مانند نام و نام خانوادگی و شماره موبایل فرد مورد نظر را وارد کنید
              </AppText>
              <AppText style={[styles.detailsText, { width: "auto" }]}>
                {" "}
                .3
              </AppText>
            </View>
        </View>
        
        <View>
          <AppSlider
             minimumValue={1}
             maximumValue={10}
             label="تعداد افراد مجاز"
          />
        </View>
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

        <View style={{width: "100%", alignItems: "center", paddingBottom: 0.1 * windowHeight}}>
          {personsArray.map((item, index) => (
            <View key={index} style={{width: "100%", alignItems: "center"}}>
              <ListItem
                
                header={item.firstname + ' ' + item.lastname}
                detailsFirst={item.phoneNumber}
                // date={item.date}
                IconComponent={<PersonListIcon size={30} />}
                // onPress={() => props.navigation.navigate("ZoneDetail")}
                renderRightActions={(progress, dragx) => (
                  <ListItemActions
                    progress={progress}
                    dragx={dragx}
                    onPressDelete={() => console.log(item.header, " deletted")}
                    onPressEdit={() => {
                      console.log(item.header, " editted")
                      setShowModal(true)
                    }
                    }
                  />
                )}
              />
              <Modal  animationType="slide" transparent={true} visible={showModal}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: "#000000bb",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: "85%",
                    height: 0.7 * windowHeight,
                    backgroundColor: colors.inputViewBackground,
                    borderRadius: 20,
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    paddingHorizontal: 15,
                  }}
                >
                  <View style={{ width: "100%" }}>
                    <TouchableOpacity
                      onPress={() => setShowModal(false)}
                      style={{
                        marginLeft: 10,
                        alignSelf: "flex-start",
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
                        alignSelf: "flex-end",
                      }}
                    >
                      ویرایش اطلاعات فرد
                    </AppText>
                  </View>
                  <Formik
                    initialValues={{
                      firstname: item.firstname,
                      lastname: item.lastname,
                      phoneNumber: item.phoneNumber,
                    }}
                    onSubmit={(e) => {
                      item.firstname = e.firstname
                      item.lastname = e.lastname
                      item.phoneNumber = e.phoneNumber
                      setPersonsArray([...personsArray])
                      setShowModal(false);
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
                          defaultValue={item.firstname}
                          label="نام"
                          required
                          onBlur={() => setFieldTouched("firstname")}
                          onChangeText={handleChange("firstname")}
                          viewStyle={{
                            borderColor:
                              touched.zoneProperties && errors.zoneProperties ? "red" : "black",
                            borderWidth:
                              touched.zoneProperties && errors.zoneProperties ? 2 : 0,
                          }}
                          isWrong={touched.firstname && errors.firstname}
                          onWrongText={errors.firstname}
                        />
                        <AppTextInput
                          defaultValue={item.lastname}
                          label="نام خانوادگی"
                          required
                          onBlur={() => setFieldTouched("lastname")}
                          onChangeText={handleChange("lastname")}
                          viewStyle={{
                            borderColor:
                              touched.lastname && errors.lastname ? "red" : "black",
                            borderWidth: touched.lastname && errors.lastname ? 2 : 0,
                          }}
                          isWrong={touched.lastname && errors.lastname}
                          onWrongText={errors.lastname}
                        />

                        <AppTextInput
                          defaultValue={item.phoneNumber}
                          label="شماره موبایل فرد"
                          required
                          onBlur={() => setFieldTouched("phoneNumber")}
                          onChangeText={handleChange("phoneNumber")}
                          viewStyle={{
                            borderColor:
                              touched.phoneNumber && errors.phoneNumber ? "red" : "black",
                            borderWidth: touched.phoneNumber && errors.phoneNumber ? 2 : 0,
                          }}
                          isWrong={touched.phoneNumber && errors.phoneNumber}
                          onWrongText={errors.phoneNumber}
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
            ))}
        </View>
        
        </View>
        
      </ScrollView>
        
      <AppButton
          title="ثبت چک لیست"
          color={colors.yellow}
          viewStyle={{width: "100%"}}
          textStyle={{fontSize: 14 / fontScale, color: colors.white, marginRight: 3}}
          RightIcon={<BackwardArrowIcon size={14} color={colors.white}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.inputViewBackground,
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 10 / fontScale,
    color: colors.white,
  },
  editButton: {
    borderRadius: 5,
    width:"90%",
    height: "auto",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 30,
    backgroundColor: colors.yellow,
  },
  screenView: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: 15 / fontScale,
    color: "#58508d",
    marginVertical: 10,
  },
  chartView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginRight: 10
  },
  detailsText: {
    fontSize: 11 / fontScale,
    color: colors.darkBlue,
    width: 0.6  * windowWidth,
    textAlign: "right",
  },
  formView: {
    flex: 1,
    width: "100%",
    justifyContent: "space-evenly",
    marginBottom: 30,
  },
  buttonView:{
    backgroundColor: colors.inputViewBackground,
    width: "100%",
    borderStyle: "dashed",
    borderRadius: 10,
    borderColor: "#707070",
    borderWidth: 2,
    marginBottom: 30
  },
  buttonText: {
    fontSize: 15 / fontScale,
    color: "#707070",
  },
  flexView: {
    flex: 1,
    flexDirection: "row-reverse",
    width: "100%",
    justifyContent: "space-between",
     alignItems: "center"
 },
 
});

export default CreateProject3Screen;