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
import ListItem from "../../components/ListItem";
import ScreenHeader from "../../components/ScreenHeader";
import colors from "../../config/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function ReportsListScreen(props) {
  return (
    <View style={styles.container}>
      <ScreenHeader
        profilePicture={require("../../assets/favicon.png")}
        headerText="لیست گزارشات"
      />
      <AppPicker />
      <AppPicker />
      <AppPicker />
      <ScrollView
        persistentScrollbar={true}
        style={{
          width: "100%",
          overflow: "scroll",
        }}
      >
        <View style={styles.textContainer}>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <ListItem key={index} />
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
