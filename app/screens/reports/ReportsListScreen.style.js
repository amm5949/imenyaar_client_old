import { Dimensions , StyleSheet} from "react-native";
import colors from "../../config/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const styles = StyleSheet.create({

    commonStyle: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },

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
      fontFamily: "iran-sans-regular",
    },

    reportContainer: {
        width: "100%",
        overflow: "scroll",
        marginTop: 15,
    },

    textContainer: {
      width: "100%",
      alignItems: "center",
    },
  });

  export {styles};