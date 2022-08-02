import { Dimensions , StyleSheet} from "react-native";
import colors from "../../config/colors";

const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const styles = StyleSheet.create({

    background: {
      flex: 1,
      justifyContent: "flex-end",
      height: 0.85 * windowHeight,
    },

    tabview: {
      flex: 0.753,
      borderTopEndRadius: 20,
      borderTopStartRadius: 20,
      backgroundColor: "#fff",
    },

    tabbarIndicator: {
      backgroundColor: "#ffae00",
      position: "absolute",
      top: 0,
      width: "36%",
      left: "7%",
    },

    repotZoneContainer: {
        backgroundColor: "#fff",
        elevation: 0,
        shadowOpacity: 0,
    },

    tabbarLabel: {
      fontSize: 13 / fontScale,
      color: "#7c828a",
    },

    tabReport: {
      flex: 1,
      backgroundColor: "#fff",
      paddingHorizontal: 15,
      maxHeight: 0.732 * windowHeight,
    },

    tabZone: {
      flex: 1,
      backgroundColor: "#fff",
    },

    title: {
      fontSize: 15 / fontScale,
      color: colors.black,
      marginRight: 12,
      marginBottom: 12,
    },

    cardItemRow: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginBottom: 10,
      elevation: 7,
    },

    cardBox: {
      flex: 0.4,
      justifyContent: "center",
    },

    barView: {
      width: "100%",
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
    },

    percentView: {
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      alignItems: "center",
    },

    percent: {
      color: "#58508d",
      fontSize: 17 / fontScale,
      fontWeight: "500",
    },
  });

  export {styles};