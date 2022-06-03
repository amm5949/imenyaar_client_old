import React, { useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, View } from "react-native";
import AppPicker from "../../components/AppPicker";
import AppText from "../../components/AppText";
import AccidentListIcon from "../../components/icons/AccidentListIcon";
import ListItem from "../../components/ListItem";
import ListItemActions from "../../components/ListItemActions";
import ScreenHeader from "../../components/ScreenHeader";
import colors from "../../config/colors";
import { getAccidents } from "../../api/accidents";
import LoadingAnimation from "../../components/LoadingAnimation";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const projectsArray = [" پروژه برج مروارید", "پروژه ساخت هوشمند"];
const zonesArray = ["زون شماره 1", "زون شماره 2"];
const activitiesArray = ["فعالیت شماره 1", "فعالیت شماره 2"];

// const reportsArray = [];
let isSubscribed = false;

function AccidentsListScreen(props) {
  const [accidentsArray, setAccidentsArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    isSubscribed = true;
    // request();
    isSubscribed && setLoading(true);
    getAccidents()
      .then((response) => {
        if (isSubscribed) {
          setLoading(false);
          setError(false);
          setAccidentsArray(response.data.result.incidents);
        }
      })
      .catch((reason) => {
        isSubscribed && setError(true);
      });

    return () => (isSubscribed = false)
  }, []);
  return (
    <View style={styles.container}>
      <ScreenHeader
        profilePicture={require("../../assets/list_report_screen/sample-profile.jpg")}
        headerText="لیست حوادث"
        onPressNavigation={() => props.navigation.openDrawer()}
      />
      <AppPicker
        choices={projectsArray}
        placeholder="مثال : پروژه شاخت هوشمند"
        title="نام پروژه"
        required
      />
      <AppPicker
        choices={zonesArray}
        placeholder="مثال : زون شماره اول"
        title="نام زون"
        required
      />
      <AppPicker
        choices={activitiesArray}
        placeholder="مثال : فعالیت شبکه کشی ساختمان"
        title="نام فعالیت"
        required
      />

      {loading ?
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <LoadingAnimation visible={loading} />
        </View> :
        accidentsArray.length === 0 ? (
          <View
            style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
          >
            <Image
              source={require("../../assets/list_report_screen/empty-list.png")}
              style={styles.emptyListImage}
              resizeMode="cover"
            />
            <AppText style={styles.notFoundText}>
              هنوز حادثه ای ثبت نشده است
            </AppText>
          </View>
        ) : (
          <ScrollView
            persistentScrollbar={true}
            style={{
              width: "100%",
              overflow: "scroll",
              marginTop: 25,
            }}
          >
            <View style={styles.textContainer}>
              {accidentsArray.map((item, index) => (
                <ListItem
                  key={index}
                  header={item.project_name}
                  detailsFirst={item.activity_name}
                  detailsSecond={item.zone_name}
                  date={item.date}
                  IconComponent={<AccidentListIcon size={35} />}
                  onPress={() =>
                    props.navigation.navigate("Accidents", {
                      screen: "AccidentDetail",
                      params: {
                        user: item.first_name + " " + item.last_name,
                        type: item.type,
                        clock: item.date,
                        debt: item.financial_damage,
                        casualty: item.human_damage,
                        description: item.description,
                        zone: item.zone_name,
                        activity: item.activity_name,
                        project: item.project_name
                      },
                    })
                  }
                  renderRightActions={(progress, dragx) => (
                    <ListItemActions
                      progress={progress}
                      dragx={dragx}
                      onPressDelete={() => console.log(item.header, " deletted")}
                      onPressEdit={() => console.log(item.header, " editted")}
                    />
                  )}
                />
              ))}
            </View>
          </ScrollView>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.inputViewBackground,
    flex: 1,
    alignItems: "center",
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
  },
});

export default AccidentsListScreen;
