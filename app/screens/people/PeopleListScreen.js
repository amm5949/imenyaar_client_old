import React, {useEffect, useState} from "react";
import { Dimensions, Image, ScrollView, StyleSheet, View } from "react-native";
import AppPicker from "../../components/AppPicker";
import AppText from "../../components/AppText";
import PersonListIcon from "../../components/icons/PersonListIcon";
import ListItem from "../../components/ListItem";
import ListItemActions from "../../components/ListItemActions";
import ScreenHeader from "../../components/ScreenHeader";
import colors from "../../config/colors";
import {getReports} from "../../api/reports";
import {getPeople} from "../../api/people";
import LoadingAnimation from "../../components/LoadingAnimation";
import { useSelector } from "react-redux";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const projectsArray = [" پروژه برج مروارید", "پروژه ساخت هوشمند"];
const zonesArray = ["زون شماره 1", "زون شماره 2"];
const activitiesArray = ["فعالیت شماره 1", "فعالیت شماره 2"];

let isSubscribed = false;

function PeopleListScreen(props) {
  const [peopleArray, setPeopleArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const userData_people = useSelector((state) => state.user);
  const fetchPeople = async()=>{
    const People = await getPeople(userData_people?.user.result.tokens.access_token)
    setPeopleArray(People.data.result.items);
    console.log("People Output: ", People);
  }
  if (peopleArray === null) {
    return null;
  }
  // useEffect(() => {
  //   isSubscribed = true;
  //   // request();
  //   isSubscribed && setLoading(true);
  //   getPeople()
  //       .then((response) => {
  //         console.log(response);
  //         if(isSubscribed){
  //           setLoading(false);
  //           setError(false);
  //           setPeopleArray(response.data.result);
  //         }
  //       })
  //       .catch((reason) => {
  //         console.log("ERROR reason: ", reason);
  //         isSubscribed && setError(true);
  //       });

  //   // return () => (isSubscribed = false)
  // }, []);
  useEffect(() => {
    // mounting
    fetchPeople();
  }, [])
  return (
    <View style={styles.container}>
      <ScreenHeader
        profilePicture={require("../../assets/list_report_screen/sample-profile.jpg")}
        headerText="لیست افراد"
        onPressNavigation={() => props.navigation.openDrawer()}
      />
      <AppPicker
        choices={projectsArray}
        placeholder="مثال : پروژه شاخت هوشمند"
        title="نام پروژه"
        required
      />
      <AppPicker
        choices={zonesArray}
        placeholder="مثال : زون شماره اول"
        title="نام زون"
        required
      />
      <AppPicker
        choices={activitiesArray}
        placeholder="مثال : فعالیت شبکه کشی ساختمان"
        title="نام فعالیت"
        required
      />

      {loading ?
          <View
              style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
          >
              <LoadingAnimation visible={loading} />
          </View> :
      peopleArray.length === 0 ? (
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
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
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
  },
});

export default PeopleListScreen;
