import * as React from "react";
import { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import CardItem from "../../components/CardItem";
import AppBarChart from "../../components/AppBarChart";
import colors from "../../config/colors";
import BarGraphIcon from "../../components/icons/BarGraphIcon";
import GroupIcon from "../../components/icons/GroupIcon";
import CardBox from "../../components/CardBox";
import ForwardArrowIcon from "../../components/icons/ForwardArrowIcon";
import ProjectZoneIcon from "../../components/icons/ProjectZoneIcon";
import AppText from "../../components/AppText";
import AppCircularProgressBar from "../../components/AppCircularProgressBar";
const initialLayout = { width: Dimensions.get("window").width };

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

export default class ProjectDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
      routes: [
        { key: "zones", title: "زون های پروژه" },
        { key: "reports", title: "گزارشات پروژه" },
      ],
    };
  }
  componentWillReceiveProps = (nextProps) => {
    
  }

  renderScene = ({ route: route1 }) => {
    const { route } = this.props;
    switch (route1.key) {
      case "zones":
        return (
          <ScrollView style={styles.tabZone}>
            <View style={styles.cardItemRow}>
              <CardBox
                viewStyle={styles.cardBox}
                title={"زون شماره 2"}
                text={
                  (`• مشخصه 1 • مشخصه 1 \n• مشخصه 1 • مشخصه 1 \n• مشخصه 1 • مشخصه 1 `,
                  `• مشخصه 1 • مشخصه 1 \n• مشخصه 1 • مشخصه 1 \n• مشخصه 1 • مشخصه 1 `)
                }
                buttonTitle={"توضیحات"}
                icon={<ForwardArrowIcon size={12} color="white" />}
              />
              <CardBox
                viewStyle={styles.cardBox}
                title={"زون شماره 1"}
                text={
                  (`• مشخصه 1 • مشخصه 1 \n• مشخصه 1 • مشخصه 1 \n• مشخصه 1 • مشخصه 1 `,
                  `• مشخصه 1 • مشخصه 1 \n• مشخصه 1 • مشخصه 1 \n• مشخصه 1 • مشخصه 1 `)
                }
                buttonTitle={"توضیحات"}
                icon={<ForwardArrowIcon size={12} color="white" />}
              />
            </View>

            <View style={styles.cardItemRow}>
              <CardBox
                viewStyle={styles.cardBox}
                title={"زون شماره 4"}
                text={
                  (`• مشخصه 1 • مشخصه 1 \n• مشخصه 1 • مشخصه 1 \n• مشخصه 1 • مشخصه 1 `,
                  `• مشخصه 1 • مشخصه 1 \n• مشخصه 1 • مشخصه 1 \n• مشخصه 1 • مشخصه 1 `)
                }
                buttonTitle={"توضیحات"}
                icon={<ForwardArrowIcon size={12} color="white" />}
              />
              <CardBox
                viewStyle={styles.cardBox}
                title={"زون شماره 3"}
                text={
                  (`• مشخصه 1 • مشخصه 1  \n• مشخصه 1 • مشخصه 1 \n• مشخصه 1 • مشخصه 1 `,
                  `• مشخصه 1 • مشخصه 1 \n• مشخصه 1 • مشخصه 1 \n• مشخصه 1 • مشخصه 1 `)
                }
                buttonTitle={"توضیحات"}
                icon={<ForwardArrowIcon size={12} color="white" />}
              />
            </View>
          </ScrollView>
        );
      case "reports":
        return (
          <View style={styles.tabReport}>
            <ScrollView
              contentContainerStyle={{
                justifyContent: "space-evenly",
                flex: 1,
              }}
            >
              <View>
                <AppText style={styles.title} w="b">
                  {/* پروژه برج مروارید */}
                  {route.params.header}
                  {console.log("route information")}
                  {console.log(route)}
                  {/* {console.log("navigation information")}
                  {console.log()} */}
                  {/* {console.log("properties header")}
                  {}
                  {console.log("Hello After borj")}
                  {console.log("first")} */}
                </AppText>
                <View style={styles.cardItemRow}>
                  <CardItem
                    text={`تعداد گزارش های ماه اخیر \n 100 گزارش`}
                    Icon={<BarGraphIcon size={20} />}
                    viewStyle={{ marginHorizontal: 4, flex: 1 }}
                  />
                  <CardItem
                    text={`تعداد گزارش های هفته اخیر \n 10 گزارش`}
                    Icon={<BarGraphIcon size={20} />}
                    viewStyle={{ marginHorizontal: 4, flex: 1 }}
                  />
                </View>
                <View style={styles.cardItemRow}>
                  <CardItem
                    text={`تعداد زون های پروژه \n 5 زون`}
                    Icon={<ProjectZoneIcon size={25} />}
                    viewStyle={{ marginHorizontal: 4, flex: 1 }}
                  />
                  <CardItem
                    text={`تعداد افراد پروژه\n 10 نفر`}
                    Icon={<GroupIcon size={20} color="#7a7c83" />}
                    viewStyle={{ marginHorizontal: 4, flex: 1 }}
                  />
                </View>
              </View>

              <View>
                <AppText w="b" style={[styles.title, { marginBottom: -7 }]}>
                  تعداد گزارشات ماهانه
                </AppText>
                <AppBarChart />
              </View>

              <View style={styles.percentView}>
                <AppText w="b" style={styles.title} fontFamily>
                  درصد انطباق با آیین نامه
                </AppText>
                <AppCircularProgressBar
                  radius={0.1 * windowWidth}
                  percent={0.76}
                  textStyle={styles.percent}
                />
              </View>
            </ScrollView>
          </View>
        );
    }
  };

  render() {
    return (
      <ImageBackground
        source={require("../../assets/list_report_screen/background-2.jpg")}
        style={styles.background}
        resizeMode="cover"
      >
        <TabView
          style={styles.tabview}
          navigationState={{
            index: this.state.index,
            routes: this.state.routes,
          }}
          renderScene={this.renderScene}
          onIndexChange={(index) => this.setState({ index })}
          initialLayout={initialLayout}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              indicatorStyle={styles.tabbarIndicator}
              style={{
                backgroundColor: "#fff",
                elevation: 0,
                shadowOpacity: 0,
              }}
              pressColor={colors.yellow}
              renderLabel={({ route, focused }) => (
                <AppText
                  style={[
                    styles.tabbarLabel,
                    focused && { color: colors.yellow },
                  ]}
                >
                  {route.title}
                </AppText>
              )}
            />
          )}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    height: 0.85 * windowHeight,
  },
  tabview: {
    flex: 0.753,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    backgroundColor: "#fff",
  },
  tabbarIndicator: {
    backgroundColor: "#ffae00",
    position: "absolute",
    top: 0,
    width: "36%",
    left: "7%",
  },
  tabbarLabel: {
    fontSize: 13 / fontScale,
    color: "#7c828a",
  },
  tabReport: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    maxHeight: 0.732 * windowHeight,
  },
  tabZone: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 15 / fontScale,
    color: colors.black,
    marginRight: 12,
    marginBottom: 12,
  },
  cardItemRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
    elevation: 7,
  },
  cardBox: {
    flex: 0.4,
    justifyContent: "center",
  },
  barView: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  percentView: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
  },
  percent: {
    color: "#58508d",
    fontSize: 17 / fontScale,
    fontWeight: "500",
  },
});
