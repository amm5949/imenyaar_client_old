import React, {useEffect, useState} from "react";
import { Image, ScrollView, View } from "react-native";
import AppPicker from "../../components/AppPicker";
import AppText from "../../components/AppText";
import PersonListIcon from "../../components/icons/PersonListIcon";
import ListItem from "../../components/ListItem";
import ListItemActions from "../../components/ListItemActions";
import ScreenHeader from "../../components/ScreenHeader";
import {getReports} from "../../api/reports";
import {getPeople} from "../../api/people";
import LoadingAnimation from "../../components/LoadingAnimation";
import { useSelector } from "react-redux";
import { styles } from "./PeopleListScreen.style";

const projectsArray = [" پروژه برج مروارید", "پروژه ساخت هوشمند"];
const zonesArray = ["زون شماره 1", "زون شماره 2"];
const activitiesArray = ["فعالیت شماره 1", "فعالیت شماره 2"];

let isSubscribed = false;

function PeopleListScreen(props) {
  const [peopleArray, setPeopleArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const userData = useSelector((state) => state.user);
  const fetchPeople = async()=>{
    const People = await getPeople(userData?.user.result.tokens.access_token)
    console.log(People)
    setPeopleArray(People.data.result);
    console.log("People Output: ", People);
  }
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
      {/* <AppPicker
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
      /> */}

      {loading ?
          <View
              style={styles.commonStyle}
          >
              <LoadingAnimation visible={loading} />
          </View> :
      peopleArray.length === 0 ? (
        <View
          style={styles.commonStyle}
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
          style={styles.personArea}
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


export default PeopleListScreen;
