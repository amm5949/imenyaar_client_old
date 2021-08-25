import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";
import colors from "../config/colors";

import { useFonts } from "expo-font";
import { Platform } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function AppBarChart(props) {
  let [fontsLoaded] = useFonts({
    IranSans: require("../assets/fonts/iran-sans.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <BarChart
          withInnerLines={false}
          flatColor={true}
          showBarTops={false}
          fromZero={true}
          data={{
            labels: [
              `ﻦﯾﺩﺭﻭﺮﻓ`.split("").reverse().join(""),
              "ﺖﺸﻬﺒﯾﺩﺭﺍ".split("").reverse().join(""),
              "ﺩﺍﺩﺮﺧ".split("").reverse().join(""),
              "ﺮﯿﺗ".split("").reverse().join(""),
              "ﺩﺍﺩﺮﻣ".split("").reverse().join(""),
              "ﺭﻮﯾﺮﻬﺷ".split("").reverse().join(""),
              "ﺮﻬﻣ".split("").reverse().join(""),
            ],
            datasets: [
              {
                data: [20, 75, 30, 50, 40, 30, 45],
                colors: [
                  () => "rgb(205, 213, 225)",
                  () => colors.yellow,
                  () => "rgb(205, 213, 225)",
                  () => "rgb(205, 213, 225)",
                  () => "rgb(205, 213, 225)",
                  () => "rgb(205, 213, 225)",
                  () => "rgb(205, 213, 225)",
                ],
              },
            ],
          }}
          withCustomBarColorFromData={true}
          width={windowWidth}
          height={0.215 * windowHeight}
          xLabelsOffset={-5}
          yLabelsOffset={5}
          chartConfig={{
            barRadius: 4,
            fillShadowGradient: colors.yellow,
            fillShadowGradientOpacity: 1,
            backgroundGradientFrom: colors.white,
            backgroundGradientTo: colors.white,
            decimalPlaces: 0,
            barPercentage: 0.7,
            labelColor: () => "black",
            propsForHorizontalLabels: {
              fontSize: 9 / fontScale,
            },
            propsForVerticalLabels: {
              fontSize: (Platform.OS === "web" ? 9 : 10) / fontScale,
              fontFamily: "IranSans",
            },
          }}
          style={{
            marginLeft: -Dimensions.get("window").width / 9.8,
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppBarChart;
