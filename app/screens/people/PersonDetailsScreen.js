import React from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import AppText from "../../components/AppText";
import ProjectPersonIcon from "../../components/icons/ProjectPersonIcon";
import TelephoneIcon from "../../components/icons/TelephoneIcon";
import colors from "../../config/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function PersonDetailsScreen(props) {
  return (
    <ScrollView style={{ backgroundColor: colors.white }}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/list_report_screen/background-2.jpg")}
          style={styles.imageBackground}
          resizeMode="cover"
        ></ImageBackground>
        <View style={styles.detailsView}>
          <ScrollView style={{ width: "100%" }}>
            <AppText style={styles.headerText}>
              جزئیات افراد پروژه برج مروارید
            </AppText>
            <View style={styles.zoneDetailsView}>
              <View style={styles.zoneDetailsHeaderView}>
                <AppText
                  style={[styles.detailsHeaderText, { color: colors.darkBlue }]}
                >
                  نام: <AppText style={styles.detailsHeaderText}>علی</AppText>
                </AppText>
                <ProjectPersonIcon color={colors.darkBlue} size={25} />
              </View>
              <View style={styles.zoneDetailsHeaderView}>
                <AppText
                  style={[styles.detailsHeaderText, { color: "#58508d" }]}
                >
                  نام خانوادگی:{" "}
                  <AppText style={styles.detailsHeaderText}>حسن آبادی</AppText>
                </AppText>
                <ProjectPersonIcon color="#58508d" size={25} />
              </View>
              <View style={styles.zoneDetailsHeaderView}>
                <AppText
                  style={[styles.detailsHeaderText, { color: colors.yellow }]}
                >
                  شماره تماس:{" "}
                  <AppText style={styles.detailsHeaderText}>0915901944</AppText>
                </AppText>
                <TelephoneIcon size={25} />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#201a31",
    justifyContent: "space-between",
    height: 1 * windowHeight,
  },
  detailsHeaderText: {
    fontSize: 12 / fontScale,
    color: "#333",
    marginRight: 10,
    position: "relative",
    top: 3,
    width: "84%",
  },
  detailsText: {
    color: colors.black,
    fontSize: 10 / fontScale,
  },
  detailsView: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 0,
    paddingTop: 10,
    minHeight: 0.63 * windowHeight,
    maxHeight: 0.78 * windowHeight,
  },
  headerText: {
    fontSize: 14 / fontScale,
    color: colors.black,
    marginRight: 8,
    marginTop: 10,
    marginBottom: 20,
  },
  imageBackground: {
    width: "100%",
    height: 0.85 * windowHeight,
    // marginBottom: 20,
    alignItems: "center",
  },
  zoneDetailsHeaderView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 25,
  },
  zoneDetailsView: {
    width: "100%",
    marginBottom: 30,
  },
});

export default PersonDetailsScreen;
