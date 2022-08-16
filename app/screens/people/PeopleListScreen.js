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
import LoadingAnimation from "../../components/LoadingAnimation";
import { getZones } from "../../api/zones";
import { getProjects } from "../../api/projects";
import CircularIcon from "../../components/CircularIcon";
import { fetchPeople } from "../../api/projects/fetch_people";

import { styles } from "./PeopleListScreen.style";
import { deleteUser } from "../../api/people/delete";

let isSubscribed = false;

function PeopleListScreen(props) {
  const [peopleArray, setPeopleArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [zonesArray, setZonesArray] = useState([]);
  const [projectsArray, setProjectsArray] = useState([]);
  const isFocused = useIsFocused();

  const userData = useSelector((state) => state.user);
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

  const handleDelete = async (id) => {
    const res = await deleteUser(
      userData?.user.result.tokens.access_token,
      id
    );
    console.log("deleteUser", res);
    fetchPeople();
  };

  const handleCreate = () => {
    props.navigation.navigate("People", {
      screen: "PeopleCreate",
    });
  };
  
  useEffect(() => {
    // mounting
    fetchProjects();
    fetchZones();
  }, [isFocused]);

  if (!projectsArray) {
    return (
      <div>
        لطفا ابتدا پروژه را انتخاب کنید
      </div>
    )
  }
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
        handleFilter={handleFilter}
        required
        handleRemoveFilter={handleRemoveFilter}
      />
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
                    onPressDelete={() => handleDelete(item.id)}
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
          onPress={handleCreate}
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
