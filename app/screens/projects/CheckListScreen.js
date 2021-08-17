import React from "react";
import { useState } from "react";
import { View, StyleSheet, Dimensions, Modal } from "react-native";
import AppButton from "../../components/AppButton";
import AppCircularProgressBar from "../../components/AppCircularProgressBar";
import AppDatePicker from "../../components/AppDatePicker";
import AppPicker from "../../components/AppPicker";
import AppText from "../../components/AppText";
import AppTextInput from "../../components/AppTextInput";
import DatePickerInputField from "../../components/DatePickerInputField";
import ScreenHeader from "../../components/ScreenHeader";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function CheckListScreen(props) {
  const [visible, setVisible] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <View style={styles.container}>
      <ScreenHeader
        onPressNavigation={() => props.navigation.openDrawer()}
        headerText="تخصیص فعالیت ها"
        profilePicture={require("../../assets/list_report_screen/sample-profile.jpg")}
      />
      <View style={styles.screenView}>
        <AppText style={styles.headerText}>
          در هر قسمت اطلاعات مورد نیاز را تکمیل کنید
        </AppText>
        <View style={styles.chartView}>
          <AppCircularProgressBar
            percent={1}
            color={colors.green}
            backgroundColor={colors.inputViewBackground}
            customText="4/4"
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <AppText style={styles.detailsText}>
              {" "}
              اطلاعات اصلی برای ثبت چک لیست مثل نام فعالیت و زمان شروع و پایان و
              سایر موارد خواسته شده را تکمیل کنید
            </AppText>
            <AppText style={[styles.detailsText, { width: "auto" }]}>
              {" "}
              .4
            </AppText>
          </View>
        </View>
        <View style={styles.formView}>
          <AppTextInput
            viewStyle={{ borderColor: colors.yellow, borderWidth: 1.5 }}
            label="نام پروژه"
            required
            editable={false}
            value=" پروژه برج مروارید"
          />
          <AppPicker
            containerStyle={{ width: "100%" }}
            placeholder="مثال : زون شماره اول"
            title="نام زون"
            required
          />
          <AppPicker
            containerStyle={{ width: "100%" }}
            placeholder="مثال : فعالیت شبکه کشی ساختمان"
            title="نام فعالیت"
            required
          />
          <View style={styles.datePickerView}>
            <DatePickerInputField
              containerStyle={{ flex: 1, marginRight: 30 }}
              label="زمان خاتمه برنامه ریزی شده"
              required
              placeholder="مثال : 00/01/30"
            />
            <DatePickerInputField
              containerStyle={{ flex: 1 }}
              label="زمان شروع فعالیت"
              required
              placeholder="مثال : 00/01/30"
            />
          </View>
          <AppPicker
            containerStyle={{ width: "100%" }}
            placeholder="مثال : علی احمدیان"
            title="نام فرد"
            required
          />
          <AppPicker
            containerStyle={{ width: "100%" }}
            placeholder="مثال :  در انتظار شروع"
            title="وضعیت فعالیت"
            required
          />
          <AppButton
            title="ثبت چک لیست"
            RightIcon={
              <MaterialCommunityIcons name="plus" color="#707070" size={30} />
            }
            viewStyle={styles.buttonView}
            textStyle={styles.buttonText}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonView: {
    backgroundColor: colors.inputViewBackground,
    width: "100%",
    borderStyle: "dashed",
    borderRadius: 10,
    borderColor: "#707070",
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 15 / fontScale,
    color: "#707070",
  },
  chartView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: colors.inputViewBackground,
    // alignItems: "center",
  },
  datePickerView: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailsText: {
    fontSize: 11 / fontScale,
    color: colors.darkBlue,
    width: 0.52 * windowWidth,
    textAlign: "right",
  },
  formView: {
    flex: 1,
    width: "100%",
    justifyContent: "space-evenly",
    marginBottom: 30,
  },
  headerText: {
    fontSize: 15 / fontScale,
    color: "#58508d",
    marginTop: 10,
  },
  screenView: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 15,
  },
});

export default CheckListScreen;
