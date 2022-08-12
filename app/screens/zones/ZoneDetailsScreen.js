import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import AppText from "../../components/AppText";
import DescriptionIcon from "../../components/icons/DescriptionIcon";
import colors from "../../config/colors";
import { styles } from "./ZoneDetailsScreen.style";

function ZoneDetailsScreen(props) {
  return (
    <ScrollView style={styles.mainStyle}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/list_report_screen/background-2.jpg")}
          style={styles.imageBackground}
          resizeMode="cover"
        ></ImageBackground>
        <View style={styles.detailsView}>
          <ScrollView style={styles.zoneDetailsContainer}>
            <AppText style={styles.headerText}>
              {props.route.params.name}
            </AppText>
            <View style={styles.zoneDetailsView}>
              <View style={styles.zoneDetailsHeaderView}>
                <AppText style={styles.detailsHeaderText}>مشخصات زون :</AppText>
                <DescriptionIcon size={30} />
              </View>
              <AppText style={styles.detailsText}>
                {props.route.params.details}
                {console.log(props.route.params.details)}
              </AppText>
            </View>
            <View style={styles.zoneDetailsView}>
              <View style={styles.zoneDetailsHeaderView}>
                <AppText
                  style={[styles.detailsHeaderText, { color: colors.yellow }]}
                >
                  توضیحات زون :
                </AppText>
                <DescriptionIcon size={30} color={colors.yellow} />
              </View>
              <AppText style={styles.detailsText}>
                {props.route.params.properties}
              </AppText>
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}

export default ZoneDetailsScreen;
