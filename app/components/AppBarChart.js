import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";
import colors from "../config/colors";

import { useFonts } from "expo-font";

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
              "ﻦﯾﺩﺭﻭﺮﻓ".split("").reverse().join(""),
              "ﺖﺸﻬﺒﯾﺩﺭﺍ".split("").reverse().join(""),
              "ﺩﺍﺩﺮﺧ".split("").reverse().join(""),
              "ﺮﯿﺗ".split("").reverse().join(""),
              "ﺩﺍﺩﺮﻣ".split("").reverse().join(""),
              "ﺭﻮﯾﺮﻬﺷ".split("").reverse().join(""),
            ],
            datasets: [
              {
                data: [75, 60, 45, 30, 15, 40],
                colors: [
                  () => colors.yellow,
                  () => "#bbb",
                  () => "#bbb",
                  () => "#bbb",
                  () => "#bbb",
                  () => "#bbb",
                  () => "#bbb",
                ],
              },
            ],
          }}
          withCustomBarColorFromData={true}
          flatColor={true}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          xLabelsOffset={0}
          yLabelsOffset={0}
          chartConfig={{
            barRadius: 5,
            fillShadowGradient: colors.yellow,
            fillShadowGradientOpacity: 1,
            backgroundGradientFrom: colors.white,
            backgroundGradientTo: colors.white,
            decimalPlaces: 0,
            labelColor: () => "#7c828a",
            propsForHorizontalLabels: {
              fontSize: 10,
              fontFamily: "IranSans",
            },
          }}
          style={{
            marginLeft: -Dimensions.get("window").width / 18,
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
    marginTop: 20,
  },
});

export default AppBarChart;