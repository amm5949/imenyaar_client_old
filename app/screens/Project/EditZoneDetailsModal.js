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
  zoneProperties: Yup.string().required("مشخصات را وارد کنید"),
  discription: Yup.string().required("توضیحات را وارد کنید"),
});

function EditZoneDetailsModal(props) {
  const [showModal, setShowModal] = useState(false);
  const [information, setInformation] = useState({
    zoneProperties: "زون شماره 1",
    discription:  "زون شماره 1",
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
              height: 0.65 * windowHeight,
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
                ویرایش زون
              </AppText>
            </View>
            <Formik
              initialValues={{
                zoneProperties: information.zoneProperties,
                discription: information.discription,
              }}
              onSubmit={(values) => {
                console.log(values);
                setInformation({
                  ...values,
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
                    defaultValue={information.zoneProperties}
                    label="مشخصات زون"
                    required
                    onBlur={() => setFieldTouched("zoneProperties")}
                    onChangeText={handleChange("zoneProperties")}
                    viewStyle={{
                      borderColor:
                        touched.zoneProperties && errors.zoneProperties ? "red" : "black",
                      borderWidth:
                        touched.zoneProperties && errors.zoneProperties ? 2 : 0,
                    }}
                    isWrong={touched.zoneProperties && errors.zoneProperties}
                    onWrongText={errors.zoneProperties}
                  />
                  <AppTextInput
                    defaultValue={information.discription}
                    label="توضیحات"
                    required
                    onBlur={() => setFieldTouched("discription")}
                    onChangeText={handleChange("discription")}
                    multiline={true}
                    numberOfLines={4}
                    textStyle={{height:"100%",  justifyContent: "flex-start",}}
                    viewStyle={{
                      padding: 0,
                      alignItems: "flex-start",
                      height: windowHeight * 0.15,
                      borderColor:
                        touched.discription && errors.discription ? "red" : "black",
                      borderWidth: touched.discription && errors.discription ? 2 : 0,
                    }}
                    isWrong={touched.discription && errors.discription}
                    onWrongText={errors.discription}
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
            title="ویرایش زون"
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

export default EditZoneDetailsModal;