import React, { useRef } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import AppCircularProgresBar from "../../../components/AppCircularProgressBar";
import AppText from "../../../components/AppText";
import AppTextInput from "../../../components/AppTextInput";
import DatePickerInputField from "../../../components/DatePickerInputField";
import AppSwitchInput from "../../../components/AppSwitchInput";
import ScreenHeader from "../../../components/ScreenHeader";
import colors from "../../../config/colors";
import AppButton from "../../../components/AppButton";
import BackwardArrowIcon from "../../../components/icons/BackwardArrowIcon";
import { ScrollView } from "react-native";
import AppLocationPicker from "../../../components/AppLocationPicker";
import { Formik } from "formik";
import { addProject } from "../../../api/projects/create";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function CreateProjectScreen(props) {
  const {route} = props
  const handleSubmit = (values) => {
    
    console.log(values)
    console.log("access token ", route.params)
    addProject(values)
    props.navigation.navigate("step2")
  }
  const ref = useRef();
  //******************************* has zone haves a problem that should be fixed **************************
  return (
    <View style={styles.container}>
      <ScreenHeader
        profilePicture={require("../../../assets/list_report_screen/sample-profile.jpg")}
        headerText="پروژه ها"
        onPressNavigation={() => props.navigation.openDrawer()}
      />
      <Formik
        initialValues={{ name: "", startDate: "", endDate: "", area: "", location: "", hasZone: false }}
        onSubmit={handleSubmit}
        innerRef={ref}
      >
        {({
          handleChange,
          handleSubmit,
          errors,
          setFieldTouched,
          touched,
          enableReinitialize
        }) => (
          <View style={styles.screenView}>
            <AppText style={styles.headerTitle}>
              در هر قسمت اطلاعات مورد نیاز را تکمیل کنید
            </AppText>
            <View style={styles.chartView}>
              <AppCircularProgresBar
                percent={0.25}
                color={colors.yellow}
                backgroundColor={colors.inputViewBackground}
                customText="1/4"
                emptyColor="#d5d7e1"
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  marginRight: -5,
                }}
              >
                <AppText style={styles.detailsText}>
                  {" "}
                  اطلاعات اصلی مثل نام پروژه و تاریخ ها و موقعیت مکانی را روی نقشه
                  مشخص کنید
                </AppText>
                <AppText style={[styles.detailsText, { width: "auto" }]}>
                  {" "}
                  .1
                </AppText>
              </View>
            </View>

            <ScrollView
              contentContainerStyle={{
                // flex: 1,
                minHeight: 0.55 * windowHeight,
                width: "100%",
              }}
            >
              <View style={styles.formView}>
                <AppTextInput
                  label="نام پروژه"
                  onBlur={() => setFieldTouched("name")}
                  onChangeText={handleChange("name")}
                  required
                  placeholder="مثال: پروژه برج مروارید"
                />
                <View style={styles.datePickerContainer}>
                  <DatePickerInputField
                    containerStyle={{ flex: 1 }}
                    required
                    formikRef={ref}
                    dateType='startDate'
                    label="زمان شروع پروژه"
                    placeholder="مثال: 30/01/00"
                  />
                  <DatePickerInputField
                    containerStyle={{ flex: 1, marginRight: 10 }}
                    required
                    formikRef={ref}
                    dateType='endDate'
                    requiredColor="#c70000"
                    label="زمان خاتمه برنامه ریزی شده"
                    placeholder="مثال: 30/01/00"
                  />
                </View>
                <AppTextInput
                  label="مساحت"
                  required
                  onBlur={() => setFieldTouched("area")}
                  onChangeText={handleChange("area")}
                  placeholder="مثال: 25 متر مربع"
                />

                <AppLocationPicker
                  label="موقیعت مکانی"
                  placeholder="مثال: مشهد سه راه خیام نرسیده به دستغیب"
                  required
                  formikRef={ref}
                />
                <AppSwitchInput
                  label="زون بندی"
                  required
                  formikRef={ref}
                  value="آیا پروژه زون بندی دارد؟"
                />
              </View>
            </ScrollView>
            <AppButton
              title="ثبت ادامه اطلاعات"
              color={colors.yellow}
              viewStyle={{
                width: "100%",
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


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.inputViewBackground,
    flex: 1,
    alignItems: "center",
  },
  screenView: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: 15 / fontScale,
    color: "#58508d",
    marginTop: 10,
  },
  chartView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginLeft: 10,
    marginBottom: 15,
  },
  detailsText: {
    fontSize: 11 / fontScale,
    color: colors.darkBlue,
    width: 0.58 * windowWidth,
    textAlign: "right",
  },
  emptyListImage: {
    width: 0.87 * windowWidth,
    height: 0.29 * windowHeight,
    marginTop: 0.055 * windowHeight,
    marginBottom: 15,
  },
  notFoundText: {
    fontSize: 15 / fontScale,
    color: colors.darkBlue,
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
    flex: 1,
    marginVertical: 20,
  },
  percentView: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  percent: {
    color: colors.yellow,
    fontSize: 18 / fontScale,
    fontWeight: "500",
  },
  progressbarTitle: {
    fontSize: 12 / fontScale,
    fontWeight: "500",
    fontFamily: "IranSans",
    color: "#2f4b7c",
  },
  formView: {
    flex: 1,
    width: "100%",
    justifyContent: "space-evenly",
    marginBottom: 30,
  },
  datePickerContainer: {
    flexDirection: "row-reverse",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default CreateProjectScreen;
