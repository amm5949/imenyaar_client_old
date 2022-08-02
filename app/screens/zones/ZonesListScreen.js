import React, { useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import useApi from "../../api/useApi";
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
import { styles } from "./ZonesListScreen.style";


function ZonesListScreen(props) {
  const [zonesArray, setZonesArray] = useState([]);
  const [projectsArray, setProjectsArray] = useState([]);
  const [filteredZones, setFilteredZones] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [value, setValue] = useState(null);


  const userData_zones = useSelector((state) => state.user);
  // const { request, loading, error, data } = useApi(getZones);
  const fetchZones = async () => {
    const zones = await getZones(userData_zones?.user.result.tokens.access_token)
    setZonesArray(zones.data.result.values);
    setFilteredZones(zones.data.result.values);
  
    console.log("getZones Output", zones);
  }
  const fetchProjects = async () => {
    const projects = await getProjects(userData_zones?.user.result.tokens.access_token)
    setProjectsArray(projects.data.result.items)
    console.log("projects in zone page", projects.data.result.items)
  }
  useEffect(() => {
    // mounting
    fetchZones();
    fetchProjects();
  }, [])
 
  useEffect(()=>{
    value ? setFilteredZones(zonesArray.filter(zone => zone.project_name === value)) : setFilteredZones(zonesArray)
  }, [value])

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
        value={value}
        setValue={setValue}
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
            {filteredZones.map((item, index) => (
              <ListItem
                key={index}
                header={item.name}
                detailsFirst={"نام پروژه: " + item.project_name}
                IconComponent={<ZoneListIcon size={30} />}
                onPress={() =>
                  props.navigation.navigate("Zones", {
                    screen: "ZoneDetail",
                    params: {
                      name: item.name,
                      details: item.details,
                      properties: item.properties,
                    },
                  })
                }
                renderRightActions={(progress, dragx) => (
                  <ListItemActions
                    progress={progress}
                    dragx={dragx}
                    onPressDelete={() => console.log(item.header, " deletted")}
                    onPressEdit={() => console.log(item.header, " editted")}
                  />
                )}
              />
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
}


export default ZonesListScreen;
