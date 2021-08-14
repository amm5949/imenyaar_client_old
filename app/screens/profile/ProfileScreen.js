import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import AppButton from "../../components/AppButton";
import AppTextInput from "../../components/AppTextInput";
import NavigationIcon from "../../components/icons/NavigationIcon";
import ProfileCard from "../../components/ProfileCard";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function ProfileScreen(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        blurRadius={0.5}
        style={styles.profileBackground}
        source={require("../../assets/list_report_screen/sample-profile.jpg")}
      >
        <View style={styles.filterImage} />
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0.13 * windowHeight,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.openDrawer()}
            style={{ alignSelf: "flex-end", marginRight: 20 }}
          >
            <NavigationIcon color={colors.yellow} size={40} />
          </TouchableOpacity>
          <View style={styles.profileView}>
            <Image
              resizeMode="cover"
              style={{ width: 100, height: 100, borderRadius: 10 }}
              source={require("../../assets/list_report_screen/sample-profile.jpg")}
            />
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0.359 * windowHeight,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProfileCard />
      </View>
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "space-between",
          height: 0.33 * windowHeight,
          alignItems: "center",
          paddingHorizontal: 15,
        }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
              marginBottom: 10,
            }}
          >
            <AppTextInput
              containerStyle={{ flex: 1, marginHorizontal: 10 }}
              editable={false}
              label="نام خانوادگی"
              value="اکبر آبادی"
            />
            <AppTextInput
              containerStyle={{ flex: 1, marginHorizontal: 10 }}
              editable={false}
              label="نام"
              value="علی"
            />
          </View>
          <AppTextInput
            containerStyle={{
              marginHorizontal: 10,
            }}
            editable={false}
            label="نام کاربری"
            value="@ahmadian_ali"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
            marginBottom: 20,
          }}
        >
          <AppButton
            viewStyle={styles.exitButton}
            textStyle={[styles.buttonText, { color: colors.yellow }]}
            title="خروج "
            RightIcon={
              <MaterialCommunityIcons
                name="logout"
                color={colors.yellow}
                size={20}
              />
            }
          />
          <AppButton
            viewStyle={styles.editButton}
            textStyle={styles.buttonText}
            title="ویرایش حساب"
            RightIcon={
              <MaterialCommunityIcons
                name="square-edit-outline"
                color={colors.white}
                size={20}
              />
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    flex: 1,
  },
  buttonText: {
    fontSize: 10 / fontScale,
    color: colors.white,
  },
  editButton: {
    borderRadius: 5,
    width: 0.302 * windowWidth,
    height: "auto",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: colors.yellow,
  },
  exitButton: {
    borderRadius: 5,
    width: 0.302 * windowWidth,
    height: "auto",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#eee",
    borderWidth: 1,
    borderColor: colors.yellow,
  },
  profileBackground: {
    height: 0.453 * windowHeight,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: "hidden",
  },
  profileView: {
    padding: 5,
    borderRadius: 10,
    borderColor: "#daa520",
    borderStyle: "dashed",
    borderWidth: 1,
    marginRight: 10,
    marginLeft: 8,
  },
  filterImage: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
});

export default ProfileScreen;
