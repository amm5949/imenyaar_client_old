import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, ScrollView, View } from "react-native";

import AppText from "../../components/AppText";
import CardItem from "../../components/CardItem";
import CasualtyIcon from "../../components/icons/CasualtyIcon";
import ClockIcon from "../../components/icons/ClockIcon";
import DebtIcon from "../../components/icons/DebtIcon";
import DescriptionIcon from "../../components/icons/DescriptionIcon";
import ImageFileIcon from "../../components/icons/ImageFileIcon";
import ProjectAccidentIcon from "../../components/icons/ProjectAccidentIcon";
import ProjectActivityIcon from "../../components/icons/ProjectActivityIcon";
import ProjectZoneIcon from "../../components/icons/ProjectZoneIcon";
import ImageList from "../../components/ImageList";
import colors from "../../config/colors";
import { styles } from "./AccidentDetailsScreen.style";

const pictures = [
  require("../../assets/list_report_screen/burn-house-1.jpg"),
  require("../../assets/list_report_screen/burn-house-1.jpg"),
  require("../../assets/list_report_screen/burn-house-1.jpg"),
  require("../../assets/list_report_screen/burn-house-1.jpg"),
];

function AccidentDetailsScreen(props) {
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
            <View style={styles.headerView}>
              <AppText style={styles.headerText}>
                {props.route.params.project}
              </AppText>
            </View>
            <View style={styles.cardView}>
              <CardItem
                text={"خسارت مالی: " + props.route.params.debt + " ریال"}
                Icon={<DebtIcon size={23} color="#aaa" />}
                viewStyle={{ marginHorizontal: 4, flex: 1 }}
              />
              <CardItem
                text={"تلفات جانی: " + props.route.params.casualty + " نفر"}
                Icon={<CasualtyIcon size={24} />}
                viewStyle={{ marginHorizontal: 4, flex: 1 }}
              />
            </View>
            <View style={styles.cardView}>
              <CardItem
                text={"زون: " + props.route.params.zone}
                Icon={<ProjectZoneIcon size={23} />}
                viewStyle={{ marginHorizontal: 4, flex: 1 }}
              />
              <CardItem
                text={"فعالیت: " + props.route.params.activity}
                Icon={<ProjectActivityIcon size={23} />}
                viewStyle={{ marginHorizontal: 4, flex: 1 }}
              />
            </View>
            <View style={styles.textView}>
              <View style={styles.descriptionView}>
                <AppText style={[styles.text, { color: colors.darkBlue }]}>
                  {"گزارش حادثه ثبت شده از " + props.route.params.user}
                </AppText>
                <MaterialCommunityIcons
                  name="account"
                  color={colors.darkBlue}
                  size={25}
                />
              </View>
              <View style={styles.descriptionView}>
                <AppText style={[styles.text, { color: colors.errorRed }]}>
                  نوع حادثه :{" "}
                  <AppText style={styles.text}>
                    {props.route.params.type}
                  </AppText>
                </AppText>
                <ProjectAccidentIcon
                  size={26}
                  style={{ position: "relative", left: 3 }}
                />
              </View>
              <View style={styles.descriptionView}>
                <AppText
                  style={[
                    styles.text,
                    { color: colors.yellow, marginRight: 15 },
                  ]}
                >
                  ساعت حدودی رخداد حادثه :{" "}
                  <AppText style={styles.text}>
                    {props.route.params.clock}
                  </AppText>
                </AppText>
                <ClockIcon size={20} color={colors.yellow} />
              </View>
              <View style={styles.descriptionView}>
                <AppText style={[styles.text, { color: "#58508d" }]}>
                  توضیحات حادثه :{" "}
                  <AppText style={styles.text}>
                    {props.route.params.description}
                  </AppText>
                </AppText>
                <DescriptionIcon size={25} />
              </View>
            </View>
            <View style={{ width: "100%", marginBottom: 10 }}>
              <View style={styles.imageSectionHeaderView}>
                <AppText style={[styles.imageSectionHeaderText]}>
                  عکس های ارسال شده :
                </AppText>
                <ImageFileIcon size={25} color="#7a7c83" />
              </View>
              <ImageList pictures={pictures} />
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}

export default AccidentDetailsScreen;
