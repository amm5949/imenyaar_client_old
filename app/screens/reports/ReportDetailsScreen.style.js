import { Dimensions , StyleSheet} from "react-native";
import colors from "../../config/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;


const styles = StyleSheet.create({

    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
    },

    buttonText: {
      color: colors.white,
      fontSize: 9 / fontScale,
    },

    buttonView: {
      backgroundColor: "#ff7c43",
      paddingHorizontal: 25,
      borderRadius: 5,
      paddingVertical: 3,
      height: "auto",
      width: "auto",
    },

    pdfButtonView: {
      paddingHorizontal: 10,
      backgroundColor: colors.yellow,
      borderRadius: 5,
      paddingVertical: 3,
      height: 0.0323 * windowHeight,
      width: 0.1923 * windowWidth,
      alignSelf: "flex-end",
      marginRight: 10,
      marginBottom: 10,
    },

    cardView: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginBottom: 18,
    },

    container: {
      backgroundColor: "#201a31",
      justifyContent: "space-between",
      height: 1 * windowHeight,
    },

    detailsView: {
      width: "100%",
      alignItems: "center",
      paddingHorizontal: 15,
      backgroundColor: colors.white,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      // position: "absolute",
      // bottom: 0,
      paddingTop: 10,
      maxHeight: 0.832 * windowHeight,
    },

    headerView: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      marginBottom: 10,
    },

    headerText: {
      fontSize: 14 / fontScale,
      color: colors.black,
      marginRight: 10,
    },

    imageBackground: {
      width: "100%",
      height: 0.85 * windowHeight,
      // marginBottom: 20,
      alignItems: "center",
    },

    imageSectionHeaderText: {
      fontSize: 10.5 / fontScale,
      width: "80%",
      color: colors.darkBlue,
      marginRight: 10,
    },

    imageSectionHeaderView: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      marginBottom: 8,
    },

    nextPrevButtonText: {
      color: colors.darkBlue,
      position: "relative",
      top: 3,
      fontSize: 10 / fontScale,
    },

    questionAnswerText: {
      fontSize: 10.5 / fontScale,
      width: "80%",
      color: colors.green,
      marginRight: 10,
    },

    questionAnswerView: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      marginBottom: 25,
    },

    questionContentText: {
      fontSize: 10.5 / fontScale,
      width: "80%",
      color: "#071c33",
      marginRight: 10,
    },

    questionContentView: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      marginBottom: 10,
    },

    questionHeaderView: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      marginBottom: 10,
    },

    pdfDownloadLinkStyle: {
      fontSize: 9.5 / fontScale,
      fontFamily: "iran-sans-regular",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "flex-end",
      color: colors.white,
      textAlign: "right",
      textDecorationLine: "none",
      direction: "rtl",
      paddingLeft: 13,
      paddingRight: 13,
      backgroundColor: colors.yellow,
      borderRadius: 5,
      paddingBottom: 7,
      paddingTop: 7,
      marginRight: 10,
      marginBottom: 10,
    },
  });

  export {styles};