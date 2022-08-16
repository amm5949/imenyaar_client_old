import React, { useRef } from "react";
import { View, Text, Dimensions, ScrollView, StyleSheet } from "react-native";
import { Formik } from "formik";
import AppButton from "../../components/AppButton";
import AppTextInput from "../../components/AppTextInput";
import colors from "../../config/colors";
import BackwardArrowIcon from "../../components/icons/BackwardArrowIcon";
import { useSelector } from "react-redux";
import { updateReport } from "../../api/reports/update";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;


function ReportEditScreen(props) {
  const ref = useRef();
  console.log(props);
  const item = props.route.params;
  const userData = useSelector((state) => state.user);

  const handleSubmit = async (values) => {
    const data = {
      creation_date: toString(new Date()),
      zone_id: parseInt(values.zone_id),
      activity_id: parseInt(values.activity_id),
      question_id: parseInt(values.question_id),
    };
    console.log(data);
    await updateReport(
      userData?.user.result.tokens.access_token,
      item.id,
      data
    );
    props.navigation.goBack();
  };
  return (
    <Formik
      initialValues={{ zone_id: "", activity_id: "", question_id: ""}}
      onSubmit={handleSubmit}
      innerRef={ref}
    >
      {({
        handleChange,
        handleSubmit,
        errors,
        setFieldTouched,
        touched,
        enableReinitialize,
      }) => (
        <View style={styles.screenView}>
          <ScrollView
            contentContainerStyle={{
              // flex: 1,
              minHeight: 0.55 * windowHeight,
              width: "100%",
            }}
          >
            <View style={styles.formView}>
              <AppTextInput
                label="آیدی زون"
                onBlur={() => setFieldTouched("zone_id")}
                onChangeText={handleChange("zone_id")}
                required
                value={item.zone_id}
              />
              <AppTextInput
                label="آیدی فعالیت"
                required
                onBlur={() => setFieldTouched("activity_id")}
                onChangeText={handleChange("activity_id")}
                value={item.activity_id}
              />
              <AppTextInput
                label="آیدی سوال"
                required
                onBlur={() => setFieldTouched("question_id")}
                onChangeText={handleChange("question_id")}
                value={item.question_id}
              />
              
            </View>
          </ScrollView>
          <AppButton
            title="ویرایش"
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

  informationMainText: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginRight: -5,
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

export default ReportEditScreen;