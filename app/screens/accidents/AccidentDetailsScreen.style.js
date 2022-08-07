import { Dimensions, StyleSheet } from "react-native";
import colors from "../../config/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const styles = StyleSheet.create({
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

  descriptionView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 19,
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
    maxHeight: 0.832 * windowHeight,
  },

  headerView: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
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
    color: "#7a7c83",
    marginRight: 10,
  },

  imageSectionHeaderView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 8,
  },

  text: {
    fontSize: 10.5 / fontScale,
    textAlign: "right",
    width: "84%",
    marginRight: 10,
    color: "#333",
    color: colors.errorRed,
  },

  textView: {
    marginTop: 15,
    marginBottom: 10,
  },
});

export { styles };
