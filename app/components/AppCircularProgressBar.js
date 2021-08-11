import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import colors from "../config/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function AppCircularProgressBar({
  percent = 0.5,
  radius = 0.1 * windowWidth,
  strokeWidth = 8,
  textStyle,
  color = colors.yellow,
}) {
  const data = {
    data: [percent],
    colors: [color],
  };
  return (
    <View style={styles.container}>
      <ProgressChart
        data={data}
        width={2.5 * radius}
        height={2.5 * radius}
        strokeWidth={strokeWidth}
        radius={radius}
        chartConfig={{
          backgroundGradientFrom: colors.white,
          backgroundGradientTo: colors.white,
          color: (opacity = 1) => colors.inputViewBackground,
        }}
        hideLegend={true}
        withCustomBarColorFromData={true}
      />
      <Text
        style={[
          styles.percentStyle,
          { top: radius - 5, color: color },
          textStyle,
        ]}
      >
        {(data.data[0] * 100).toString() + "%"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    // marginLeft: 10,
    alignItems: "center",
    // alignSelf: "center",
  },
  percentStyle: {
    fontSize: 20 / fontScale,
    fontWeight: "bold",
    position: "absolute",
    alignSelf: "center",
    color: colors.yellow,
  },
});

export default AppCircularProgressBar;
