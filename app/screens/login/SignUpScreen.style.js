import { Dimensions , StyleSheet} from "react-native";
import colors from "../../config/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({

    scrollViewStyle: {
      backgroundColor: colors.inputViewBackground
    },

    loginFromHereButton: {
        fontSize: 15,
        color: colors.yellow,
        textDecorationLine: "underline",
    },

    button: {
      width: "100%",
      borderRadius: 15,
      marginBottom: 10,
      marginTop: 20,
      backgroundColor: colors.yellow,
    },

    container: {
      // flex: 1,
      backgroundColor: "#201a31",
      justifyContent: "space-between",
      height: 1 * windowHeight,
      // position: "relative",
    },

    contentContainer: {
      flex: 1,
    },

    checkbox: {
      borderRadius: 20,
    },

    checkboxText: {
      fontSize: 11,
    },

    bottomView: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      // paddingHorizontal: 20,
      // direction: "rtl",
      marginBottom: 10,
      // backgroundColor: "red",
    },

    imageBackground: {
      width: "100%",
      height: 0.85 * windowHeight,
      // marginBottom: 20,
      alignItems: "center",
    },

    linkText: {
      fontSize: 15,
      color: "#e04860",
      textDecorationLine: "underline",
      marginBottom: 20,
    },

    logoIcon: {
      marginTop: 0.03 * windowHeight,
      width: 80,
      height: 80,
    },

    logoText: {
      fontSize: 28,
      color: colors.yellow,
    },

    textInput: {
      borderRadius: 25,
      width: 40,
      height: 40,
      backgroundColor: "white",
      padding: 10,
      textAlign: "center",
    },

    text: {
      fontSize: 13,
      textAlign: "center",
      paddingHorizontal: 0.008 * windowWidth,
      marginBottom: 2,
      color: "#333",
    },

    timingText: {
      fontSize: 15,
      color: "#a69d9d",
      marginRight: 8,
      paddingTop: 4,
    },

    title: {
      fontSize: 20,
      color: colors.black,
      paddingTop: 0.01 * windowHeight,
      paddingBottom: 3,
    },

    rememberMeView: {
      flexDirection: "row",
      alignItems: "center",
    },

    rowTextInput: {
      width: "100%",
      flexDirection: "row-reverse",
      justifyContent: "space-between",
    },

    forgetPassText: {
      fontSize: 13,
      alignSelf: "flex-end",
      marginTop: 7,
      marginBottom: 20,
    },

    inputView: {
      width: "100%",
      alignItems: "center",
      paddingHorizontal: 20,
      backgroundColor: colors.inputViewBackground,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      position: "absolute",
      bottom: 0,
    },

    welcomeText: {
      color: colors.white,
      fontSize: 20,
      marginTop: 3,
    },

    welcomeDescText: {
      fontSize: 13,
      width: 0.468 * windowWidth,
      textAlign: "center",
      color: "#ccc",
      fontWeight: "100",
      // marginBottom: 0.15 * windowHeight,
    },
  });

  export {styles};