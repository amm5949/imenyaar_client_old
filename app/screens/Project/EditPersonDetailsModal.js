import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import AppButton from "../../components/AppButton";
import AppTextInput from "../../components/AppTextInput";
import NavigationIcon from "../../components/icons/NavigationIcon";
import ProfileCard from "../../components/ProfileCard";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import AppText from "../../components/AppText";
import * as Yup from "yup";
import { Formik } from "formik";

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

function EditPersonDetailsModal(props) {
  const [showModal, setShowModal] = useState(false);
  const [information, setInformation] = useState({
    firstname: "علی",
    lastname: "علی آبادی",
    phoneNumber: "09151550555",
    username: "@ahmadian_ali",
  });
  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={showModal}>
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
                firstname: information.firstname,
                lastname: information.lastname,
                phoneNumber: information.phoneNumber,
              }}
              onSubmit={(values) => {
                console.log(values);
                setInformation({
                  ...values,
                  ...{ username: information.username },
                });
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
                    defaultValue={information.firstname}
                    label="نام"
                    required
                    onBlur={() => setFieldTouched("firstname")}
                    onChangeText={handleChange("firstname")}
                    viewStyle={{
                      borderColor:
                        touched.firstname && errors.firstname ? "red" : "black",
                      borderWidth:
                        touched.firstname && errors.firstname ? 2 : 0,
                    }}
                    isWrong={touched.firstname && errors.firstname}
                    onWrongText={errors.firstname}
                    // placeholder="مثال : علی "
                  />
                  <AppTextInput
                    defaultValue={information.lastname}
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
                    // placeholder="مثال : اکبر آبادی "
                  />
                  <AppTextInput
                    defaultValue={information.phoneNumber}
                    label="شماره موبایل"
                    required
                    onBlur={() => setFieldTouched("phoneNumber")}
                    onChangeText={handleChange("phoneNumber")}
                    keyboardType="numeric"
                    viewStyle={{
                      borderColor:
                        touched.phoneNumber && errors.phoneNumber
                          ? "red"
                          : "black",
                      borderWidth:
                        touched.phoneNumber && errors.phoneNumber ? 2 : 0,
                    }}
                    isWrong={touched.phoneNumber && errors.phoneNumber}
                    onWrongText={errors.phoneNumber}
                    placeholder="مثال : 09153698888 "
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
      
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0.359 * windowHeight,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
              marginBottom: 10,
            }}
          >
            
          </View>
          
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
            marginBottom: 40,
          }}
        >
          <AppButton
            onPress={() => setShowModal(true)}
            viewStyle={styles.editButton}
            textStyle={styles.buttonText}
            title="ویرایش اطلاعات فرد"
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
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    flex: 1,
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
  exitButton: {
    borderRadius: 5,
    width: 0.302 * windowWidth,
    height: "auto",
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: "#eee",
    borderWidth: 1,
    borderColor: colors.yellow,
  },
  profileBackground: {
    height: 0.453 * windowHeight,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: "hidden",
  },
  profileView: {
    padding: 5,
    borderRadius: 10,
    borderColor: "#daa520",
    borderStyle: "dashed",
    borderWidth: 1,
    marginRight: 10,
    marginLeft: 8,
  },
  filterImage: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
});

export default EditPersonDetailsModal;