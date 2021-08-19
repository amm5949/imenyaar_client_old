import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AppCircularProgresBar from "../../../components/AppCircularProgressBar";
import AppText from "../../../components/AppText";
import AppTextInput from "../../../components/AppTextInput";
import DatePickerInputField from "../../../components/DatePickerInputField";
import AppSwitchInput from "../../../components/AppSwitchInput"
import ScreenHeader from "../../../components/ScreenHeader";
import colors from "../../../config/colors";
import { useState } from "react";
import AppButton from "../../../components/AppButton";
import SimpleLocationIcon from "../../../components/icons/SimpleLocationIcon";
import BackwardArrowIcon from "../../../components/icons/BackwardArrowIcon";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;


function ProjectsListScreen(props) {
    const [visible, setVisible] = useState(false);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    
    return (
      <View style={styles.container}>
        <ScreenHeader
          profilePicture={require("../../../assets/list_report_screen/sample-profile.jpg")}
          headerText="پروژه ها"
          onPressNavigation={() => props.navigation.openDrawer()}
        />
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
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  marginRight: -5
                }}
              >
                <AppText style={styles.detailsText}>
                  {" "}
                  اطلاعات اصلی مثل نام پروژه و تاریخ ها و موقعیت مکانی را روی نقشه مشخص کنید
                </AppText>
                <AppText style={[styles.detailsText, { width: "auto" }]}>
                  {" "}
                  .1
                </AppText>
              </View>
          </View>

          <View style={styles.formView}>
            <AppTextInput
              viewStyle={{ borderColor: colors.yellow, borderWidth: 1.5 }}
              label="نام پروژه"
              required
              editable={false}
              placeholder="مثال: پروژه برج مروارید"
            />
            <View style={styles.datePickerContainer}>
              <DatePickerInputField 
              containerStyle={{flex: 1}}
              required
              label="زمان شروع پروژه"
              placeholder="مثال: 30/01/00"
              />
              <DatePickerInputField 
              containerStyle={{ flex: 1, marginRight: 30 }}
              required
              requiredColor= "#c70000"
              label="زمان خاتمه برنامه ریزی شده"
              placeholder="مثال: 30/01/00"
              />
            </View>
            <AppTextInput
              // viewStyle={{ borderColor: colors.white, borderWidth: 0 }}
              label="مساحت"
              required
              // editable={false}
              placeholder="مثال: 25 متر مربع"
            />
            <AppTextInput
              // viewStyle={{ borderColor: colors.white, borderWidth: 0 }}
              label="موقیعت مکانی"
              required
              // editable={false}
              placeholder="مثال: مشهد سه راه خیام نرسیده به دستغیب"
              LeftIcon={<SimpleLocationIcon size={20} color="#a9adb8"/>}
            />
            <AppSwitchInput
              label="زون بندی"
              required
              value="آیا پروژه زون بندی دارد؟"
            />
        </View>
          
        </View>
        
        <AppButton
            title="ثبت ادامه ی اطلاعات"
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
      marginLeft: 10
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
        color: "#2f4b7c"
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
      alignItems: "center"
    },
  });
  

export default ProjectsListScreen;