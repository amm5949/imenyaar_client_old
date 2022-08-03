import React, { useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { getZones } from "../../api/zones";
import AppPicker from "../../components/AppPicker";
import AppText from "../../components/AppText";
import ZoneListIcon from "../../components/icons/ZoneListIcon";
import ListItem from "../../components/ListItem";
import ListItemActions from "../../components/ListItemActions";
import LoadingAnimation from "../../components/LoadingAnimation";
import ScreenHeader from "../../components/ScreenHeader";
import colors from "../../config/colors";
import { useSelector } from "react-redux";
import { getProjects } from "../../api/projects";
import { useIsFocused } from "@react-navigation/native";
import { deleteZone } from "../../api/zones/delete";
import CircularIcon from "../../components/CircularIcon";

import { styles } from "./ZoneListScreen.style";


function ZonesListScreen(props) {
  const [zonesArray, setZonesArray] = useState([]);
  const [projectsArray, setProjectsArray] = useState([]);
  const [filteredZones, setFilteredZones] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    // mounting
    fetchZones();
    // fetchProjects();
  }, [isFocused])

  const userData_zones = useSelector((state) => state.user);
  // const { request, loading, error, data } = useApi(getZones);
  const fetchZones = async () => {
    const zones = await getZones(userData_zones?.user.result.tokens.access_token)
    setZonesArray(zones.data.result.values);
    console.log("getZones Output", zones);
  }
  const fetchProjects = async () => {
    const projects = await getProjects(userData_zones?.user.result.tokens.access_token)
    setProjectsArray(projects.data.result.items)
    console.log("projects in zone page", projects.data.result.items)
  }

  const handleDelete = async (event, id) => {
    const res = await deleteZone(userData_zones?.user.result.tokens.access_token, id)
    console.log("deleteZone", res)
    fetchZones()
  }
  const handleEdit =  (event, item) => {
    props.navigation.navigate("Zones", {
      screen: "ZoneEdit",
      params: item
    })
  }
  const handleCreate = () => {
    props.navigation.navigate("Zones", {
      screen: "ZoneCreate"
    }) 
  }

  return (
    <View style={styles.container}>
      <ScreenHeader
        profilePicture={require("../../assets/list_report_screen/sample-profile.jpg")}
        headerText="لیست زون ها"
        onPressNavigation={() => props.navigation.openDrawer()}
      />
      <AppPicker
        data={projectsArray}
        placeholder="مثال : پروژه شاخت هوشمند"
        title="نام پروژه"
        required
      />
      {loading || zonesArray == null ? (
        <View
          style={styles.zonePlace}
        >
          <LoadingAnimation visible={loading} />
        </View>
      ) : zonesArray.length === 0 ? (
        <View
          style={styles.zonePlace}
        >
          <Image
            source={require("../../assets/list_report_screen/empty-list.png")}
            style={styles.emptyListImage}
            resizeMode="cover"
          />
          <Text style={styles.notFoundText}>هنوز زونی ثبت نشده است</Text>
        </View>
      ) : (
        <ScrollView
          persistentScrollbar={true}
          style={styles.zoneContainer}
        >
          <View style={styles.textContainer}>
            {zonesArray.map((item, index) => (
              <TouchableOpacity
                style={styles.listItem}
                onPress={() =>
                  props.navigation.navigate("Zones", {
                    screen: "ZoneDetail",
                    params: {
                      name: item.name,
                      details: item.details,
                      properties: item.properties,
                    },
                  })
                }>
                <ListItem
                  key={index}
                  header={item.name}
                  item={item}
                  detailsFirst={"نام پروژه: " + item.project_name}
                  IconComponent={<ZoneListIcon size={30} />}
                  renderRightActions={(progress, dragx) => (
                    <ListItemActions
                      progress={progress}
                      dragx={dragx}
                      onPressDelete={(event, id) => {handleDelete(event, id)}}
                      onPressEdit={(event, item) => {handleEdit(event, item)}}
                      item={item}
                    />
                  )}
                />
              </TouchableOpacity>
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


export default ZonesListScreen;
