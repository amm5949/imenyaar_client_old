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
import { styles } from "./PersonDetailsScreen.style";

function PersonDetailsScreen(props) {
  return (
    <ScrollView style={styles.mainStyle}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/list_report_screen/background-2.jpg")}
          style={styles.imageBackground}
          resizeMode="cover"
        ></ImageBackground>
        <View style={styles.detailsView}>
          <ScrollView style={styles.personDetailsContainer}>
            <AppText style={styles.headerText}>
              جزئیات افراد پروژه برج مروارید
            </AppText>
            <View style={styles.zoneDetailsView}>
              <View style={styles.zoneDetailsHeaderView}>
                <AppText
                  style={[styles.detailsHeaderText, { color: colors.darkBlue }]}
                >
                  نام: <AppText style={styles.detailsHeaderText}>{props.route.params.firstName}</AppText>
                </AppText>
                <ProjectPersonIcon color={colors.darkBlue} size={25} />
              </View>
              <View style={styles.zoneDetailsHeaderView}>
                <AppText
                  style={[styles.detailsHeaderText, { color: "#58508d" }]}
                >
                  نام خانوادگی:{" "}
                  <AppText style={styles.detailsHeaderText}>{props.route.params.lastName}</AppText>
                </AppText>
                <ProjectPersonIcon color="#58508d" size={25} />
              </View>
              <View style={styles.zoneDetailsHeaderView}>
                <AppText
                  style={[styles.detailsHeaderText, { color: colors.yellow }]}
                >
                  شماره تماس:{" "}
                  <AppText style={styles.detailsHeaderText}>{props.route.params.phoneNumber}</AppText>
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


export default PersonDetailsScreen;
