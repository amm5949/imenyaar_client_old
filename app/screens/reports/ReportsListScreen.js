import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import AppPicker from "../../components/AppPicker";
import ReportListIcon from "../../components/icons/ReportListIcon";
import ListItem from "../../components/ListItem";
import ListItemActions from "../../components/ListItemActions";
import ScreenHeader from "../../components/ScreenHeader";
import colors from "../../config/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const projectsArray = [" پروژه برج مروارید", "پروژه ساخت هوشمند"];
const zonesArray = ["زون شماره 1", "زون شماره 2"];
const activitiesArray = ["فعالیت شماره 1", "فعالیت شماره 2"];

const reportsArray = [
  {
    header: "گزارش ثبت شده از حسن علی آبادی",
    detailsFirst: "فعالیت : سیم کشی ساختمان",
    detailsSecond: "زون : زون شماره 1",
    date: "00/02/14",
  },
  {
    header: "گزارش ثبت شده از حسن علی آبادی",
    detailsFirst: "فعالیت : سیم کشی ساختمان",
    detailsSecond: "زون : زون شماره 1",
    date: "00/02/14",
  },
  {
    header: "گزارش ثبت شده از حسن علی آبادی",
    detailsFirst: "فعالیت : سیم کشی ساختمان",
    detailsSecond: "زون : زون شماره 1",
    date: "00/02/14",
  },
  {
    header: "گزارش ثبت شده از حسن علی آبادی",
    detailsFirst: "فعالیت : سیم کشی ساختمان",
    detailsSecond: "زون : زون شماره 1",
    date: "00/02/14",
  },
  {
    header: "گزارش ثبت شده از حسن علی آبادی",
    detailsFirst: "فعالیت : سیم کشی ساختمان",
    detailsSecond: "زون : زون شماره 1",
    date: "00/02/14",
  },
  {
    header: "گزارش ثبت شده از حسن علی آبادی",
    detailsFirst: "فعالیت : سیم کشی ساختمان",
    detailsSecond: "زون : زون شماره 1",
    date: "00/02/14",
  },
  {
    header: "گزارش ثبت شده از حسن علی آبادی",
    detailsFirst: "فعالیت : سیم کشی ساختمان",
    detailsSecond: "زون : زون شماره 1",
    date: "00/02/14",
  },
];

function ReportsListScreen(props) {
  return (
    <View style={styles.container}>
      <ScreenHeader
        profilePicture={require("../../assets/favicon.png")}
        headerText="لیست گزارشات"
      />
      <AppPicker
        choices={projectsArray}
        placeholder="مثال : پروژه شاخت هوشمند"
        title="نام پروژه"
      />
      <AppPicker
        choices={zonesArray}
        placeholder="مثال : زون شماره اول"
        title="نام زون"
      />
      <AppPicker
        choices={activitiesArray}
        placeholder="مثال : فعالیت شبکه کشی ساختمان"
        title="نام فعالیت"
      />

      <ScrollView
        persistentScrollbar={true}
        style={{
          width: "100%",
          overflow: "scroll",
          marginTop: 15,
        }}
      >
        <View style={styles.textContainer}>
          {reportsArray.map((item, index) => (
            <ListItem
              key={index}
              header={item.header}
              detailsFirst={item.detailsFirst}
              detailsSecond={item.detailsSecond}
              date={item.date}
              IconComponent={<ReportListIcon size={30} />}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.inputViewBackground,
    flex: 1,
    alignItems: "center",
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
  },
});

export default ReportsListScreen;
