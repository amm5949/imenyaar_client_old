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
import { getZones } from "../../api/zones";
import { getReportsWithQueryStrings } from "../../api/reports";
import { styles } from "./ProjectDetailsScreen.style";
import { connect, useSelector } from "react-redux";
import { getPeople } from "../../api/people";
import { fetchPeople } from "../../api/projects/fetch_people";

const initialLayout = { width: Dimensions.get("window").width };

const windowWidth = Dimensions.get("window").width;

class ProjectDetailsScreen extends Component {
  // userData = useSelector((state) => state.user);
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
      routes: [
        { key: "zones", title: "زون های پروژه", params: { id: "1" } },
        { key: "reports", title: "گزارشات پروژه", params: { id: "1" } },
      ],
      id: 0,
      people: [],
      zones: [],
      zones_array: [],
      numberOfPeopleInvolvedInProject: 0,
      selectedProject: {},
      people_array: [],
      numberOfReporsts_prevMonth: 0,
      numberOfReporsts_prevWeek: 0,
      numberOfReporsts_countOfPeople: 0,
      numberOfReporsts_numberofZones: 0,
      countOfReports: [], // 0 -> previous Month  1 -> Previous week  2 -> people of the project  3 -> number of zones
      peopleOfProject: [],
    };
  }

  // printingTheZones() {
  //   for (let i = 0; i < this.state.zones.length; i++) {
  //     let mot = this.state.zones[i];
  //     console.log(mot.name);
  //   }
  // }

  fetchPeople = async () => {

    let { user } = this.props;
    console.log(`salam sedamo dari?`)
    const people = await fetchPeople(
      user?.user.result.tokens.access_token,
      this.state.selectedProject.id
    )
    console.log(`hala chi?`)
    console.log("the People of the project", people?.data.result);
    this.setState({ people_array: people?.data.result })
    // this.setState({ people: people?.data.result })
  }

  fetchZones = async () => {

    let { user } = this.props;
    const zones = await getZones(
      user?.user.result.tokens.access_token
    );
    console.log("the zones of the project", zones?.data.result.values);
    const zones_arrays = zones?.data.result.values;
    const filtered_zones = zones_arrays.filter((zone_object) => zone_object.project_id === this.state.selectedProject.id)
    this.setState({ zones_array: filtered_zones })
  }

  // filterZones = () => {
  //   const zones = this.state.zones_array;
  //   const filtered_zones = zones.filter((zone_object) => zone_object.project_id === this.state.selectedProject.id);
  //   console.log(filtered_zones)
  //   this.setState({ zones_array: filtered_zones })
  // }

  componentDidMount() {
    const { route } = this.props

    this.setState({ selectedProject: route.params })
    this.fetchPeople();
    this.fetchZones();
    // this.filterZones();
  }
  // showingCard() {
  //   console.log(`this.state.zones.length is equal ${this.state.zones.length}`)
  //   this.state.zones.map((zone, key) => {
  //     return(
  //       <CardBox
  //         key={key}
  //         viewStyle={styles.cardBox}
  //         title={`زون شماره ${zone.name}`}
  //         text={
  //           (`• ${zone.properties}`)
  //         }

  //         buttonTitle={"توضیحات"}
  //         icon={<ForwardArrowIcon size={12} color="white" />}
  //       />
  //     )
  //   })
  // }

  // getDate() {
  //   const today = new Date();
  //   // today.setDate(1);
  //   // today.setMonth(0);
  //   // console.log(`today is ${today}`);
  //   // console.log(`today date is ${today.getDate()}`);
  //   const today_onePerviousWeek = new Date();
  //   let day = today.getDate();
  //   console.log(typeof day);
  //   day -= 7;
  //   if (today.getMonth() === 0 && day < 0) {
  //     today_onePerviousWeek.setFullYear(today.getFullYear() - 1);
  //   }
  //   if (today.getMonth() % 2 === 0 && day < 0) {
  //     day += 31;
  //     today_onePerviousWeek.setMonth(
  //       today.getMonth() - 1 < 0 ? 11 : today.getMonth() - 1
  //     );
  //   } else if (today.getMonth() === 1 && day < 0) {
  //     day += 28;
  //     today_onePerviousWeek.setMonth(
  //       today.getMonth() - 1 < 0 ? 11 : today.getMonth() - 1
  //     );
  //   } else if (day < 0) {
  //     day += 30;
  //     today_onePerviousWeek.setMonth(
  //       today.getMonth() - 1 < 0 ? 11 : today.getMonth() - 1
  //     );
  //   }
  //   today_onePerviousWeek.setDate(day);
  //   return today_onePerviousWeek;
  //   // console.log(today_onePerviouWeek);
  // }

  // componentDidMount( props ) {
  //   console.log("in componentDidMount");
  //   console.log(this.props)
  //   const { route } = this.props;
  //   console.log(`route.params value in componentDidMount: ${route.params}`);
  //   this.setState({ id : route.params.id});
  //   console.log(`this.state.id value : ${this.state.id}`);
  //   const id = route.params.id;
  //   const today = new Date();
  //   const today_onePerviousMonth = new Date();
  //   const today_onePerviousWeek = this.getDate();
  //   today_onePerviousMonth.setMonth(today.getMonth() - 1 < 0 ? 11 : today.getMonth() - 1);
  //   // fetchProject( this.state.id )
  //   // .then( (response) => {
  //   //   console.log(response);
  //   // })
  //   // .catch((reason) => {
  //   //   console.log(`ERROR REASON : ${reason}`);
  //   // })
  //   getZones()
  //   .then ( (response) => {
  //     // console.log("the response of zones");
  //     // console.log(response.data.result.values);
  //     this.setState({ zones : response.data.result.values})
  //   })
  //   .catch( (reason) => {
  //     console.log(reason);
  //   })
  //   // getReportsWithQueryStrings(`?project_id = ${this.state.id}&from = ${today_onePerviousMonth}&to = ${today}`)
  //   // .then( (response) => {
  //   //   // console.log("the reponse of getReport previous month");
  //   //   console.log(response);
  //   //   this.setState( { numberOfReporsts_prevMonth : response.data.result.count} );
  //   //   // console.log(`the count of reports are (prevMonth) ${this.state.numberOfReporsts_prevMonth}`);
  //   // })
  //   // getReportsWithQueryStrings(`?project_id = ${this.state.id}&from = ${today_onePerviousWeek}&to = ${today}`)
  //   // .then( (response) => {
  //   //   // console.log("the reponse of getReport previous week");
  //   //   console.log(response);
  //   //   this.setState( { numberOfReporsts_prevMonth : response.data.result.count} );
  //   //   // console.log(`the count of reports are (prevWeek) ${this.state.numberOfReporsts_prevWeek}`);
  //   // })

  //   // fetchPeopleProject ( id )
  //   // .then( (response) => {
  //   //   // console.log("fetchPeopleProject values are " + response);
  //   //   console.log(response);
  //   //   this.setState( { peopleOfProject: response.data.result.people } )
  //   // })
  //   // .catch((reason) => {
  //   //   console.log("ERROR REASON " + reason);
  //   // })

  // }

  // componentDidUpdate ( props ) {
  //   console.log("in componentDidUpdate");
  //   const { route } = this.props;
  //   console.log(`route.params.id value in componentDidUpdate: ${route.params.id}`);
  //   this.setState({ id : route.params.id});
  //   console.log(`this.state.id value : ${this.state.id}`);
  //   let id = this.state.id;
  //   // fetchProject( id )
  //   // .then( (response) => {
  //   //   console.log(response.data.result);
  //   // })
  //   // .catch( (reason) => {
  //   //   console.log(`ERROR REASON : ${reason}`);
  //   // })
  // }

  showingZones(index = 0) {

    const { navigation } = this.props;
    const dict = [
      {
        id: index,
        zoneName: this.state.zones_array[index]?.name,
        zoneProperty: this.state.zones_array[index]?.properties,
      },
      {
        id: index + 1,
        zoneName: this.state.zones_array[index + 1]?.name,
        zoneProperty: this.state.zones_array[index + 1]?.properties,
      },
    ];
    if (typeof (dict[1].zoneName) === 'undefined') {
      dict.splice(1, 1);
    }
    return (
      <View style={styles.cardItemRow}>
        {
          dict.map((zone, key) => {
            return (
              <CardBox
                // key={key}
                viewStyle={styles.cardBox}
                title={`${zone.zoneName}`}
                text={`• ${zone.zoneProperty}`}
                onPress={() => navigation.navigate("Zones")}
                buttonTitle={"توضیحات"}
                icon={<ForwardArrowIcon size={12} color="white" />}
              />
            )
          })
        }
      </View>
    );
  }

  renderScene = ({ route: route1 }) => {
    const { route } = this.props;

    switch (route1.key) {
      case "zones":
        return (
          <ScrollView style={styles.tabZone}>
            {
              this.state.zones_array.map((zone, key) => {
                if (key % 2 === 0) {
                  return this.showingZones(key);
                }

              })
            }
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
                  {route.params.name}
                </AppText>
                <View style={styles.cardItemRow}>
                  <CardItem
                    text={`تعداد گزارش های ماه اخیر \n ${this.state.numberOfReporsts_prevMonth} گزارش`}
                    Icon={<BarGraphIcon size={20} />}
                    viewStyle={{ marginHorizontal: 4, flex: 1 }}
                  />
                  <CardItem
                    text={`تعداد گزارش های هفته اخیر \n ${this.state.numberOfReporsts_prevWeek} گزارش`}
                    Icon={<BarGraphIcon size={20} />}
                    viewStyle={{ marginHorizontal: 4, flex: 1 }}
                  />
                </View>
                <View style={styles.cardItemRow}>
                  <CardItem
                    text={`تعداد زون های پروژه \n ${this.state.zones_array?.length} زون`}
                    Icon={<ProjectZoneIcon size={25} />}
                    viewStyle={{ marginHorizontal: 4, flex: 1 }}
                  />
                  <CardItem
                    text={`تعداد افراد پروژه\n ${this.state.people_array.length} نفر`}
                    Icon={<GroupIcon size={20} color="#7a7c83" />}
                    viewStyle={{ marginHorizontal: 4, flex: 1 }}
                  />
                </View>
              </View>

              <View>
                <AppText w="b" style={[styles.title, { marginBottom: -7 }]}>
                  تعداد گزارشات ماهانه
                </AppText>
                {/* <AppBarChart /> */}
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
              style={styles.repotZoneContainer}
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

const mapStateToProps = state => ({
  user: state.user
});


export default connect(mapStateToProps)(ProjectDetailsScreen);
