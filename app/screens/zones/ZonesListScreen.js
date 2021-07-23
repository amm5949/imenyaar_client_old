import React, { useState } from "react";
import { View, StyleSheet, Dimensions, ScrollView, Image } from "react-native";
import AppPicker from "../../components/AppPicker";
import AppText from "../../components/AppText";
import ReportListIcon from "../../components/icons/ReportListIcon";
import ZoneListIcon from "../../components/icons/ZoneListIcon";
import ListItem from "../../components/ListItem";
import ListItemActions from "../../components/ListItemActions";
import ScreenHeader from "../../components/ScreenHeader";
import colors from "../../config/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const projectsArray = [" پروژه برج مروارید", "پروژه ساخت هوشمند"];
const zonesArray = ["زون شماره 1", "زون شماره 2"];
const activitiesArray = ["فعالیت شماره 1", "فعالیت شماره 2"];

// const reportsArray = [];
const initialZonesArray = [
  {
    header: "زون شماره 1",
    detailsFirst: "پروژه : برج مروارید",
    projectId: 2,
  },
  {
    header: "زون شماره 1",
    detailsFirst: "پروژه : برج مروارید",
    projectId: 2,
  },
  {
    header: "زون شماره 1",
    detailsFirst: "پروژه : برج مروارید",
    projectId: 2,
  },
  {
    header: "زون شماره 1",
    detailsFirst: "پروژه : برج مروارید",
    projectId: 2,
  },
  {
    header: "زون شماره 1",
    detailsFirst: "پروژه : برج مروارید",
    projectId: 2,
  },
  {
    header: "زون شماره 1",
    detailsFirst: "پروژه : برج مروارید",
    projectId: 2,
  },
  {
    header: "زون شماره 1",
    detailsFirst: "پروژه : برج مروارید",
    projectId: 2,
  },
  {
    header: "زون شماره 1",
    detailsFirst: "پروژه : برج مروارید",
    projectId: 2,
  },
  {
    header: "زون شماره 1",
    detailsFirst: "پروژه : برج مروارید",
    projectId: 2,
  },
  {
    header: "زون شماره 1",
    detailsFirst: "پروژه : برج مروارید",
    projectId: 2,
  },
];

function ZonesListScreen(props) {
  const [zonesArray, setZonesArray] = useState([]);
  return (
    <View style={styles.container}>
      <ScreenHeader
        profilePicture={require("../../assets/list_report_screen/sample-profile.jpg")}
        headerText="لیست زون ها"
      />
      <AppPicker
        choices={projectsArray}
        placeholder="مثال : پروژه شاخت هوشمند"
        title="نام پروژه"
        required
      />

      {zonesArray.length === 0 ? (
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
                header={item.header}
                detailsFirst={item.detailsFirst}
                detailsSecond={item.detailsSecond}
                date={item.date}
                IconComponent={<ZoneListIcon size={30} />}
                onPress={() => console.log(item)}
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
