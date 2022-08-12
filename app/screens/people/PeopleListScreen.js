import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { Dimensions, Image, ScrollView, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppPicker from "../../components/AppPicker";
import AppText from "../../components/AppText";
import PersonListIcon from "../../components/icons/PersonListIcon";
import ListItem from "../../components/ListItem";
import ListItemActions from "../../components/ListItemActions";
import ScreenHeader from "../../components/ScreenHeader";
import colors from "../../config/colors";
import { getPeople } from "../../api/people";
import LoadingAnimation from "../../components/LoadingAnimation";
import { getZones } from "../../api/zones";
import { getProjects } from "../../api/projects";
import CircularIcon from "../../components/CircularIcon";

import { styles } from "./PeopleListScreen.style";

let isSubscribed = false;

function PeopleListScreen(props) {
  const [peopleArray, setPeopleArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [zonesArray, setZonesArray] = useState([]);
  const [projectsArray, setProjectsArray] = useState([]);
  const isFocused = useIsFocused();

  const userData = useSelector((state) => state.user);

  const fetchPeople = async () => {
    const People = await getPeople(userData?.user.result.tokens.access_token);
    console.log(People);
    setPeopleArray(People.data.result);
    console.log("People Output: ", People);
  };

  const fetchZones = async () => {
    const zones = await getZones(userData?.user.result.tokens.access_token);
    setZonesArray(zones.data.result.values);

    console.log("getZones Output", zones);
  };

  const fetchProjects = async () => {
    const projects = await getProjects(
      userData?.user.result.tokens.access_token
    );
    setProjectsArray(projects.data.result.items);
  };

  const handleEdit = (item) => {
    props.navigation.navigate("People", {
      screen: "PeopleEdit",
      params: item,
    });
  };
  useEffect(() => {
    // mounting
    fetchPeople();
    fetchProjects();
    fetchZones();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <ScreenHeader
        profilePicture={require("../../assets/list_report_screen/sample-profile.jpg")}
        headerText="لیست افراد"
        onPressNavigation={() => props.navigation.openDrawer()}
      />
      <AppPicker
        data={projectsArray}
        placeholder="مثال : پروژه شاخت هوشمند"
        title="نام پروژه"
        required
      />
      <AppPicker
        data={zonesArray}
        placeholder="مثال : زون شماره اول"
        title="نام زون"
        required
      />
      {/* <AppPicker
        data={activitiesArray}
        placeholder="مثال : فعالیت شبکه کشی ساختمان"
        title="نام فعالیت"
        required
      /> */}

      {loading ? (
        <View style={styles.commonStyle}>
          <LoadingAnimation visible={loading} />
        </View>
      ) : peopleArray.length === 0 ? (
        <View style={styles.commonStyle}>
          <Image
            source={require("../../assets/list_report_screen/empty-list.png")}
            style={styles.emptyListImage}
            resizeMode="cover"
          />
          <AppText style={styles.notFoundText}>هنوز فردی ثبت نشده است</AppText>
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
            {peopleArray.map((item, index) => (
              <ListItem
                key={index}
                header={item.first_name + " " + item.last_name}
                detailsFirst={item.phone_number}
                IconComponent={<PersonListIcon size={23} />}
                onPress={() =>
                  props.navigation.navigate("People", {
                    screen: "PersonDetail",
                    params: {
                      firstName: item.first_name,
                      lastName: item.last_name,
                      phoneNumber: item.phone_number,
                    },
                  })
                }
                renderRightActions={(progress, dragx) => (
                  <ListItemActions
                    progress={progress}
                    dragx={dragx}
                    onPressDelete={() => console.log(item.header, " deletted")}
                    onPressEdit={() => handleEdit(item)}
                  />
                )}
              />
            ))}
          </View>
        </ScrollView>
      )}
      <View
        style={{
          alignSelf: "flex-end",
          marginBottom: 10,
          position: "absolute",
          bottom: 10,
          right: 10,
        }}
      >
        <CircularIcon
          onPress={() =>
            props.navigation.navigate("ProjectCreation", {
              screen: "step1",
              params: {
                access_token: userData?.user.result.tokens.access_token,
              },
            })
          }
          Icon={
            <MaterialCommunityIcons
              name="plus"
              size={30}
              color={colors.white}
            />
          }
          color={colors.yellow}
          size={50}
        />
      </View>
    </View>
  );
}

export default PeopleListScreen;
