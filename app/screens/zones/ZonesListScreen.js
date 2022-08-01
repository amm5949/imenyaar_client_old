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

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;



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
  const handleEdit = async (event, id) => {
    console.log("edit zone id", id)
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
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <LoadingAnimation visible={loading} />
        </View>
      ) : zonesArray.length === 0 ? (
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
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
          style={{
            width: "100%",
            overflow: "scroll",
            marginTop: 25,
          }}
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
                      onPressEdit={handleEdit}
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
          onPress={() => props.navigation.navigate("ProjectCreation", {
            screen: "step1",
            params: { access_token: userData?.user.result.tokens.access_token },
          })}
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.inputViewBackground,
    flex: 1,
    alignItems: "center",
  },
  emptyListImage: {
    width: 0.87 * windowWidth,
    height: 0.29 * windowHeight,
    marginTop: 0.055 * windowHeight,
    marginBottom: 15,
  },
  notFoundText: {
    fontSize: 15 / fontScale,
    color: colors.darkBlue,
    fontFamily: "iran-sans-regular"
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
  },
  listItem: {
    width: "80%",
    marginBottom: 10,
    backgroundColor: colors.inputViewBackground,
    borderRadius: 10,
    marginLeft: 30,
  }
});

export default ZonesListScreen;
