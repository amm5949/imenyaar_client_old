import React, { useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Platform,
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
import ZoneListIcon from "../../../components/icons/ZoneListIcon";
import WebModal from "modal-enhanced-react-native-web";
import PersonListIcon from "../../../components/icons/PersonListIcon";
import props from 'prop-types';
import { CurrentRenderContext } from "@react-navigation/native";
import { getZones, postZones } from "../../../api/zones";
let Modal;
if (Platform.OS === "web") Modal = WebModal;
else Modal = require("react-native").Modal;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const validationSchema = Yup.object({
  zoneProperties: Yup.string().required("مشخصات را وارد کنید"),
  discription: Yup.string().required("توضیحات را وارد کنید"),
});

const initialZonesArray = [
  {
    header: "زون شماره 1",
    details: "پروژه برج مروارید",
    projectId: 0,
  },
  {
    header: "زون شماره 2",
    details: "پروژه برج مروارید",
    projectId: 1,
  },
];

const selectedZone = {
  header: "",
  details: "",
  projectId: 0,
};

// async function handle_zone_array(access_token) {
//   const zone_values = await getZones(access_token);
//   console.log(`zone values are ${zone_values}`)
// }

function CreateProject2Screen(props) {
  const [showModal, setShowModal] = useState(false);
  const [zonesArray, setZonesArray] = useState([]);
  // const [count, setCount] = useState(3);
  const { route } = props;
  const projectDetail = route.params.params.projectDetail;
  console.log('%c 🍏 projectDetail: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', projectDetail);
  const access_token = route.params.params.access_token;
  const ref = useRef()


  const handle_zone_array = async () => {
    const zone_values = await getZones(access_token);
    // data -> result -> values(Array)
    console.log("******************************")
    console.log(zone_values.data.result.values)
    const zone_from_api = zone_values.data.result.values;
    const zone_array = [];
    for (const zone of zone_from_api) {
      if (zone.project_id === projectDetail.id) {
        zone_array.push(zone)
        console.log('f')
      }
    }
    console.log('%c 🍜 zone_array: ', 'font-size:20px;background-color: #B03734;color:#fff;', zone_array);
    setZonesArray(zone_array)
  }
  useEffect(() => {
    handle_zone_array();
  }, [])


  const create_zone = async () => {
    console.log('creating zone')
    const values = ref?.current.values;
    // setCount(count + 1);
    const zone_object = {
      name: values.name,
      project_id: projectDetail.id, // ? how may we evaluating it when we are creating one? 
      properties: values.description,
      details: values.info,
      // projectId: count - 1
    }
    // zonesArray.push(zone_object);
    const res = await postZones(zone_object, access_token);
    console.log('%c 🍈 res: ', 'font-size:20px;background-color: #465975;color:#fff;', res);
    // handle_zone_array(access_token);
    await handle_zone_array()
  }


  const handleSubmit = () => {
    console.log("vlues are ", ref?.current.values)
    props.navigation.navigate("step3")
  }

  return (
    <View style={styles.container}>
      <ScreenHeader
        profilePicture={require("../../../assets/list_report_screen/sample-profile.jpg")}
        headerText="تعریف زون"
        onPressNavigation={() => props.navigation.openDrawer()}
      />
      <Formik
        initialValues={{ info: "", description: "", name: "" }}
        onSubmit={create_zone}
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

          <ScrollView
            style={{
              width: "100%",
              overflow: "scroll",
            }}
          >
            <View style={styles.screenView}>
              <AppText style={styles.headerTitle}>
                در هر قسمت اطلاعات مورد نیاز را تکمیل کنید
              </AppText>
              <View style={styles.chartView}>
                <AppCircularProgressBar
                  percent={0.5}
                  color={colors.yellow}
                  backgroundColor={colors.inputViewBackground}
                  customText="2/4"
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
                    اطلاعات اصلی زون مانند نام زون و مشخصات آن و توضیحات را مشخص
                    کنید
                  </AppText>
                  <AppText style={[styles.detailsText, { width: "auto" }]}>
                    {" "}
                    .2
                  </AppText>
                </View>
              </View>
              <View style={styles.formView}>
                <AppTextInput
                  label="نام زون"
                  required
                  multiline
                  viewStyle={{
                    alignItems: "flex-start",
                    height: windowHeight * 0.15,
                  }}
                  placeholder="مثال: توضیحات زون را در این قسمت قرار می دهیم"
                  onBlur={() => setFieldTouched("name")}
                  onChangeText={handleChange("name")}
                />
                <AppTextInput
                  viewStyle={{ borderColor: colors.yellow, borderWidth: 1.5 }}
                  label="نام پروژه"
                  required
                  editable={false}
                  value={projectDetail.name}
                />

                <AppTextInput
                  label="مشخصات"
                  required
                  placeholder="مثال: مشخصات زون را در این بخش قرار می دهیم"
                  onBlur={() => setFieldTouched("info")}
                  onChangeText={handleChange("info")}
                />
                <AppTextInput
                  label="توضیحات"
                  required
                  multiline
                  viewStyle={{
                    alignItems: "flex-start",
                    height: windowHeight * 0.15,
                  }}
                  placeholder="مثال: توضیحات زون را در این قسمت قرار می دهیم"
                  onBlur={() => setFieldTouched("description")}
                  onChangeText={handleChange("description")}
                />

              </View>
              <AppButton
                title="افزودن زون"
                RightIcon={
                  <MaterialCommunityIcons name="plus" color="#707070" size={30} />
                }
                viewStyle={styles.buttonView}
                textStyle={styles.buttonText}
                onPress={handleSubmit}
              />

              <View
                style={{
                  width: "100%",
                  alignItems: "center",
                  paddingBottom: 0.1 * windowHeight,
                }}
              >
                {console.log('%c 🍅 zonesArray: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', zonesArray)}
                {zonesArray.length > 0 && zonesArray?.map((item, index) => (
                  <View key={index} style={{ width: "100%", alignItems: "center" }}>
                    <ListItem
                      header={item.name}
                      item={item}
                      detailsFirst={"نام پروژه: " + item.project_name}
                      IconComponent={<ZoneListIcon size={30} />}
                      renderRightActions={(progress, dragx) => (
                        <ListItemActions
                          progress={progress}
                          dragx={dragx}
                          onPressDelete={() =>
                            console.log(item.header, " deletted")
                          }
                          onPressEdit={() => {
                            console.log(item.projectId, " editted");
                            selectedZone.projectId = item.projectId;
                            selectedZone.header = item.header;
                            selectedZone.details = item.details;
                            setShowModal(true);
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
                    </View>
                  </View>
                </Modal>
              </View>
            </View>
          </ScrollView>
        )}
      </Formik>

      <AppButton
        title="ثبت ادامه اطلاعات"
        color={colors.yellow}
        viewStyle={{ width: "100%", position: "absolute", bottom: 0 }}
        textStyle={{
          fontSize: 14 / fontScale,
          color: colors.white,
          marginRight: 3,
        }}
        RightIcon={<BackwardArrowIcon size={14} color={colors.white} />}
        onPress={handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.inputViewBackground,
    flex: 1,
    alignItems: "center",
  },
  editButton: {
    borderRadius: 5,
    width: "90%",
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
    marginTop: 10,
  },
  chartView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginRight: 10,
  },
  detailsText: {
    fontSize: 11 / fontScale,
    color: colors.darkBlue,
    width: 0.6 * windowWidth,
    textAlign: "right",
  },
  formView: {
    flex: 1,
    width: "100%",
    justifyContent: "space-evenly",
    marginBottom: 15,
    minHeight: 0.4 * windowHeight,
  },
  buttonView: {
    backgroundColor: colors.inputViewBackground,
    width: "100%",
    borderStyle: "dashed",
    borderRadius: 10,
    borderColor: "#707070",
    borderWidth: 2,
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 15 / fontScale,
    color: "#707070",
  },
});

export default CreateProject2Screen;
