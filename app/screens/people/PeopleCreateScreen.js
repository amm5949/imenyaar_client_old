import React, { useRef } from "react";
import { View, Dimensions, ScrollView, StyleSheet } from "react-native";
import { Formik } from "formik";
import AppButton from "../../components/AppButton";
import AppTextInput from "../../components/AppTextInput";
import colors from "../../config/colors";
import BackwardArrowIcon from "../../components/icons/BackwardArrowIcon";
import { useSelector } from "react-redux";
import { createUser } from "../../api/people/create";
import PeopleStack from "./PeopleStack";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const PeopleCreateScreen = (props) => {

  const ref = useRef();
  console.log(props);
  const userData = useSelector((state) => state.user);

  const handleSubmit = async (values) => {
    
    const userValues = {
      ...values,
    };

    await createUser(userData?.user.result.tokens.access_token, userValues);
    props.navigation.goBack();

    console.log("here");
  };
  return (
    <Formik
      initialValues={{ first_name: "", last_name: "", phone_number: "" }}
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
                label="نام"
                onBlur={() => setFieldTouched("first_name")}
                onChangeText={handleChange("first_name")}
                required
              />
              <AppTextInput
                label="نام خانوادگی"
                onBlur={() => setFieldTouched("last_name")}
                onChangeText={handleChange("last_name")}
                required
              />
              <AppTextInput
                label="شماره تلفن"
                onBlur={() => setFieldTouched("phone_number")}
                onChangeText={handleChange("phone_number")}
                required
              />
            </View>
          </ScrollView>
          <AppButton
            title="افزودن فرد"
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
};

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
export default PeopleCreateScreen;
