import { Dimensions , StyleSheet} from "react-native";
import colors from "../../config/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;


const styles = StyleSheet.create({

    mainStyle: {
        backgroundColor: colors.white
    },

    container: {
      backgroundColor: "#201a31",
      justifyContent: "space-between",
      height: 1 * windowHeight,
    },

    zoneDetailsContainer: {
        width: "100%"
    },

    detailsHeaderText: {
      fontSize: 12 / fontScale,
      color: "#58508d",
      marginRight: 10,
      position: "relative",
      top: 3,
    },

    detailsText: {
      color: colors.black,
      fontSize: 10 / fontScale,
    },

    detailsView: {
      width: "100%",
      alignItems: "center",
      paddingHorizontal: 15,
      backgroundColor: colors.white,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      position: "absolute",
      bottom: 0,
      paddingTop: 10,
      minHeight: 0.63 * windowHeight,
      maxHeight: 0.78 * windowHeight,
    },

    headerText: {
      fontSize: 14 / fontScale,
      color: colors.black,
      marginRight: 8,
      marginTop: 10,
      marginBottom: 20,
      textAlign: "right",
    },

    imageBackground: {
      width: "100%",
      height: 0.85 * windowHeight,
      // marginBottom: 20,
      alignItems: "center",
    },

    zoneDetailsHeaderView: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      marginBottom: 10,
    },

    zoneDetailsView: {
      width: "100%",
      marginBottom: 30,
    },
  });

  export {styles};