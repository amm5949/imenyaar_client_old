import React from "react";
import { useState } from "react";
import { View, StyleSheet, Dimensions, Modal } from "react-native";
import AppButton from "../../../components/AppButton";
import AppCircularProgressBar from "../../../components/AppCircularProgressBar";
import AppDatePicker from "../../../components/AppDatePicker";
import AppPicker from "../../../components/AppPicker";
import AppText from "../../../components/AppText";
import AppTextInput from "../../../components/AppTextInput";
import DatePickerInputField from "../../../components/DatePickerInputField";
import ScreenHeader from "../../../components/ScreenHeader";
import colors from "../../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { styles } from "./CheckListScreen.style";

function CheckListScreen(props) {
  return (
    <View style={styles.container}>
      <ScreenHeader
        onPressNavigation={() => props.navigation.openDrawer()}
        headerText="تخصیص فعالیت ها"
        profilePicture={require("../../../assets/list_report_screen/sample-profile.jpg")}
      />
      <ScrollView
        style={{
          width: "100%",
          overflow: "scroll",
        }}
      >
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
                اطلاعات اصلی برای ثبت چک لیست مثل نام فعالیت و زمان شروع و پایان
                و سایر موارد خواسته شده را تکمیل کنید
              </AppText>
              <AppText style={[styles.detailsText, { width: "auto" }]}>
                {" "}
                .4
              </AppText>
            </View>
          </View>
          <View style={styles.formView}>
            <AppTextInput
              viewStyle={{
                borderColor: colors.yellow,
                borderWidth: 1.5,
              }}
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
              mode="TOP"
            />
            <AppPicker
              containerStyle={{ width: "100%" }}
              placeholder="مثال : فعالیت شبکه کشی ساختمان"
              title="نام فعالیت"
              required
              mode="BOTTOM"
            />
            <View style={styles.datePickerView}>
              <DatePickerInputField
                containerStyle={{ flex: 1, marginRight: 10 }}
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
              mode="TOP"
            />
            <AppPicker
              containerStyle={{ width: "100%" }}
              placeholder="مثال :  در انتظار شروع"
              title="وضعیت فعالیت"
              required
              mode="BOTTOM"
            />
            <AppButton
              title="ثبت چک لیست"
              RightIcon={
                <MaterialCommunityIcons name="plus" color="#707070" size={30} />
              }
              viewStyle={styles.buttonView}
              textStyle={styles.buttonText}
              onPress={() => props.navigation.navigate("ProjectList")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default CheckListScreen;
