import { Dimensions , StyleSheet } from "react-native";
import colors from "../../config/colors";
import { useState } from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;



const styles = StyleSheet.create({



    container: {
      backgroundColor: colors.inputViewBackground,
      flex: 1,
      alignItems: "center",
    },


    projectKindContainer: {
        borderRadius: 13,
        borderColor: "#003f5c",
        borderWidth: 1,
        width: "84.6%",
        flexDirection: "row",
        overflow: "hidden",
        marginVertical: 10,
    },

    // unactiveProjectContainer: {
    //     paddingVertical: 5,
    //     backgroundColor: active ? colors.inputViewBackground : "#003f5c",
    //     alignItems: "center",
    //     flex: 1,
    // },

    // unactiveProjectText: {
    //     fontSize: 11 / fontScale,
    //     color: active ? "#003f5c" : colors.inputViewBackground,
    // },

    // activeProjectContainer: {
    //     paddingVertical: 5,
    //     backgroundColor: active ? "#003f5c" : colors.inputViewBackground,
    //     alignItems: "center",
    //     flex: 1,
    // },

    // activeProjectText: {
    //     fontSize: 11 / fontScale,
    //     color: active ? colors.inputViewBackground : "#003f5c",
    // },

    unactiveProjectDetails: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },

    activeProjectPage: {
        width: "100%",
        flex: 1,
    },

    addNewProjectButton: {
        alignSelf: "flex-end",
        marginBottom: 10,
        position: "absolute",
        bottom: 10,
        right: 10,
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
    },

    textContainer: {
      width: "100%",
      alignItems: "center",
      flex: 1,
      marginVertical: 20,
    },
  });

  export {styles};