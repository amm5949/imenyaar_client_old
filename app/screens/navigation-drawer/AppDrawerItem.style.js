import { Dimensions , StyleSheet} from "react-native";
import colors from "../../config/colors";

const fontScale = Dimensions.get("window").fontScale;

const styles = StyleSheet.create({

    drewerContainer: {
        borderRadius: 10,
         marginHorizontal: 10,
          marginVertical: 15,
    },

    container: {
      marginHorizontal: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
    },

    label: {
      fontSize: 11 / fontScale,
      color: colors.white,
      marginHorizontal: 10,
    },
  });

  export {styles};