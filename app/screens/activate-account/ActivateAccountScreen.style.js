import { Dimensions ,StyleSheet} from "react-native";
import colors from "../../config/colors";

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({

    container: {
      backgroundColor: colors.inputViewBackground,
      alignItems: "center",
      // paddingTop: StatusBar.currentHeight + 10,
      flex: 1,
    },

    headerText: {
      fontSize: 20,
      color: colors.darkBlue,
      marginTop: 0.067 * windowHeight,
      marginBottom: 10,
    },

    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginTop: 30,
      width: "100%",
    },

    text: {
      color: "#58508d",
      fontSize: 13,
      marginBottom: 0.061 * windowHeight,
    },

    button: {
      width: "70%",
      backgroundColor: "#b8c1ec",
      borderRadius: 10,
      marginTop: 30,
    },

    buttonText: {
      color: colors.white,
      fontSize: 14,
    },

    bothButtonsContainer: {
      flexDirection: "row",
       alignItems: "center",
    },

    lowColorPreviosButton: {
        color: colors.yellow,
        paddingRight: 10,
        position: "relative",
        top: 3,
        opacity: 0.25,
    },

    highColorPreviosButton: {
        color: colors.yellow,
        paddingRight: 10,
        position: "relative",
        top: 3,
        opacity: 1,
    },

    lowColorButtonStyle: {
        opacity: 0.25,
    },

    highColorButtonStyle: {
        opacity: 1,
    },

    lowColorNextButton: {
        color: colors.yellow,
        paddingLeft: 10,
        position: "relative",
        top: 3,
        opacity: 0.25,
    },

    highColorNextButton: {
        color: colors.yellow,
        paddingLeft: 10,
        position: "relative",
        top: 3,
        opacity: 1,
    },
  });

  export {styles};