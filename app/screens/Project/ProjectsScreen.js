import * as React from "react";
import { Component } from "react";
import { 
  StyleSheet,
  View, 
  Text,
  ScrollView,
  ImageBackground, 
  Dimensions
} from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import CardItem from "../../components/CardItem"; 
import AppBarChart from "../../components/AppBarChart";
import colors from "../../config/colors";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import BarGraphIcon from "../../components/icons/BarGraphIcon";
import GroupIcon from "../../components/icons/GroupIcon";
import CardBox from "../../components/CardBox";
import ForwardArrowIcon from "../../components/icons/ForwardArrowIcon";
import ProjectZoneIcon from "../../components/icons/ProjectZoneIcon";
const initialLayout = { width: Dimensions.get('window').width}


export default class ProjectsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 1,
            routes: [
                { key: 'zones' , title: 'زون های پروژه' },
                { key: 'reports' , title: 'گزارشات پروژه'}
            ]
        }
    }

    renderScene = ({ route }) => {
        switch (route.key) {
            case 'zones':
                return <ScrollView style={styles.tabZone}>
                    <View style={styles.cardItemRow}>
                        <CardBox 
                        viewStyle={styles.cardBox}
                        title={"زون شماره 2"}
                        text={`• مشخصه 1 • مشخصه 1 \n• مشخصه 1 • مشخصه 1 \n• مشخصه 1 • مشخصه 1 `,`• مشخصه 1 • مشخصه 1 \n• مشخصه 1 • مشخصه 1 \n• مشخصه 1 • مشخصه 1 `}
                        buttonTitle={"توضیحات"}
                        icon={<ForwardArrowIcon size={12} color="white"/>}/>
                        <CardBox 
                        viewStyle={styles.cardBox}
                        title={"زون شماره 1"}
                        text={`• مشخصه 1 • مشخصه 1 \n• مشخصه 1 • مشخصه 1 \n• مشخصه 1 • مشخصه 1 `,`• مشخصه 1 • مشخصه 1 \n• مشخصه 1 • مشخصه 1 \n• مشخصه 1 • مشخصه 1 `}
                        buttonTitle={"توضیحات"}
                        icon={<ForwardArrowIcon size={12} color="white"/>}/>
                    </View>
                    
                    <View style={styles.cardItemRow}>
                        <CardBox
                        viewStyle={styles.cardBox}
                        title={"زون شماره 4"}
                        text={`• مشخصه 1 • مشخصه 1 \n• مشخصه 1 • مشخصه 1 \n• مشخصه 1 • مشخصه 1 `,`• مشخصه 1 • مشخصه 1 \n• مشخصه 1 • مشخصه 1 \n• مشخصه 1 • مشخصه 1 `}
                        buttonTitle={"توضیحات"}
                        icon={<ForwardArrowIcon size={12} color="white"/>}/> 
                        <CardBox 
                        viewStyle={styles.cardBox}
                        title={"زون شماره 3"}
                        text={`• مشخصه 1 • مشخصه 1  \n• مشخصه 1 • مشخصه 1 \n• مشخصه 1 • مشخصه 1 `,`• مشخصه 1 • مشخصه 1 \n• مشخصه 1 • مشخصه 1 \n• مشخصه 1 • مشخصه 1 `}
                        buttonTitle={"توضیحات"}
                        icon={<ForwardArrowIcon size={12} color="white"/>}/>
                    </View>
                   
                </ScrollView>;
            case 'reports':
                return <ScrollView style={styles.tabReport}>
                     <Text
                        style={[styles.title, {margin:12}]}
                     >پروژه ی برج مروارید
                     </Text>
                     <View style={styles.cardItemRow}>
                        <CardItem
                            text= {` تعداد گزارش های هفته ی اخیر\n200 گزارش`}
                            Icon={
                                <BarGraphIcon
                                  size={20}
                                  color="#c9c9c9"
                                />
                              }
                        />
                        <CardItem
                            text={`تعداد گزارش های ماه اخیر\n 10 گزارش `}
                            Icon={
                                <BarGraphIcon
                                  size={20}
                                  color="#c9c9c9"
                                />
                              }
                        />
                     </View>
                     <View style={styles.cardItemRow}>
                        <CardItem
                            text={`تعداد زون های پروژه \n 5 زون`}
                            Icon={
                            <ProjectZoneIcon
                            size={25} />
                            }
                        />
                        <CardItem
                            text={`تعداد افراد پروژه\n 10 نفر`}
                            Icon={
                                <GroupIcon
                                  size={20}
                                  color="#c9c9c9"
                                />
                              }
                        />
                     </View>
                    
                     <Text style={[styles.title, {margin:12}]}>تعداد گزارشات ماهانه</Text>
                     <View style={styles.barView}>
                        <AppBarChart style={{flex: 1, fontSize: 5}}/>
                     </View>
                     
                     <View style={styles.percentView}>
                        <Text style={styles.title}>
                            درصد انطباق با آیین نامه</Text>
                        <AnimatedCircularProgress
                            size={75}
                            width={8}
                            fill={76}
                            tintColor="#ffae00"
                            rotation={-360}
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            backgroundColor="#eee" >
                            {
                                (fill) => (
                                  <Text style={styles.percent}>
                                    76%
                                  </Text>
                                )
                                }

                        </AnimatedCircularProgress>
                     </View>
                     
                </ScrollView>;
        }
    }

  render() {
      return (
      <ImageBackground
        source={require("../../assets/projects-screen/background.jpg")}
        style={styles.background}>
            <TabView
              style={styles.tabview}
              navigationState={{ index: this.state.index, routes: this.state.routes }}
              renderScene={this.renderScene}
              onIndexChange={index=>this.setState({index})}
              initialLayout={initialLayout}
              renderTabBar={props => <TabBar {...props}
                                        indicatorStyle={styles.tabbarIndicator}
                                        style={{backgroundColor: "#fff"}}
                                        activeColor= "#ffae00"
                                        inactiveColor = "#7c828a"
                                        labelStyle={styles.tabbarLabel}
                                        />}
            />
      </ImageBackground>);
  }

    
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        fontFamily: "IranSans"
    },
    tabview: {
      flex: 0.75, 
      fontFamily: "IranSans",
      borderTopEndRadius: 25,
      borderTopStartRadius: 25,
      backgroundColor: "#fff"
    },
    tabbarIndicator: { 
        backgroundColor: '#ffae00',
        position: 'absolute', 
        top: 0 , 
        width: '36%', 
        left: '7%' 
    },
    tabbarLabel: {
        fontFamily: "IranSans",
        fontSize: 12,
        fontWeight: "600"
    },
    tabReport: { 
        flex: 1,
        backgroundColor: "#fff",
        fontFamily: "IranSans",
        paddingHorizontal: 15,
    },
    tabZone: { 
        flex: 1,
        backgroundColor: "#fff",
        fontFamily: "IranSans",
        // paddingHorizontal: 15,
    },
    title: {
        fontSize: 15,
        fontWeight: "500",
        fontFamily: "IranSans",
        color: colors.black
        
    },
    cardItemRow: {
        flexDirection: "row",
        fontFamily: "IranSans",
        justifyContent: "space-evenly",
        marginBottom: 10,
        elevation: 7,
    },
    cardBox: {
        flex: 0.4,
        justifyContent: "center"
    },
    barView: {
        width: "100%", 
        justifyContent:"center", 
        flexDirection:"row",
        alignItems: "center"
    },
    percentView: {
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 12,
        marginVertical: 40
    },
    percent: {
        color: "#58508d",
        fontSize: 17,
        fontWeight: "500",
    }
});
