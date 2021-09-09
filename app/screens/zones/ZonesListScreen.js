import React, { useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, View } from "react-native";
import { login } from "../../api/auth";
import { getZones } from "../../api/zones";
import AppPicker from "../../components/AppPicker";
import AppText from "../../components/AppText";
import ZoneListIcon from "../../components/icons/ZoneListIcon";
import ListItem from "../../components/ListItem";
import ListItemActions from "../../components/ListItemActions";
import ScreenHeader from "../../components/ScreenHeader";
import colors from "../../config/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const projectsArray = [" پروژه برج مروارید", "پروژه ساخت هوشمند"];

const initialZonesArray = [
  {
    name: "zone 1",
    project_name: "project xi",
  },
  {
    name: "زون 1",
    project_name: "پروژه زون 1",
  },
  {
    name: "zone 1",
    project_name: "project xi",
  },
  {
    name: "zone 1",
    project_name: "project xi",
  },
];

function ZonesListScreen(props) {
  const [zonesArray, setZonesArray] = useState(initialZonesArray);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getZones()
      .then((response) => {
        console.log(response);
        setZonesArray(response.data.result.values);
        setLoading(false);
        setError(false);
      })
      .catch((reason) => {
        console.log("ERROR reason: ", reason);
        setError(true);
      });
  }, []);

  return (
    <View style={styles.container}>
      <ScreenHeader
        profilePicture={require("../../assets/list_report_screen/sample-profile.jpg")}
        headerText="لیست زون ها"
        onPressNavigation={() => props.navigation.openDrawer()}
      />
      <AppPicker
        choices={projectsArray}
        placeholder="مثال : پروژه شاخت هوشمند"
        title="نام پروژه"
        required
      />

      {zonesArray.length === 0 || loading || error ? (
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <Image
            source={require("../../assets/list_report_screen/empty-list.png")}
            style={styles.emptyListImage}
            resizeMode="cover"
          />
          <AppText style={styles.notFoundText}>هنوز زونی ثبت نشده است</AppText>
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
            {zonesArray.map((item, index) => (
              <ListItem
                key={index}
                header={item.name}
                detailsFirst={"نام پروژه: " + item.project_name}
                IconComponent={<ZoneListIcon size={30} />}
                onPress={() => props.navigation.navigate("ZoneDetail")}
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

export default ZonesListScreen;
