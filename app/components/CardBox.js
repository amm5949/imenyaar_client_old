import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { Card, Button, Icon } from 'react-native-elements'
import colors from "../config/colors";
import AppText from "./AppText";
import { useFonts } from "expo-font";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function CardBox({
  width,
  title,
  text,
  buttonTitle,
  icon,
  style,
  textStyle,
  viewStyle,
  ...otherProps
}) {
    let [fontsLoaded] = useFonts({
        IranSans: require("../assets/fonts/iran-sans.ttf"),
      });
    if (!fontsLoaded) {
        return null;
      } else {
        return (
            <View
              style={[styles.container, { width: width }, viewStyle]}
              {...otherProps}
            > 
              <View style={styles.titleHolder}>
                <Text style={[styles.title, style]}>{title}</Text>
              </View>
              <Card containerStyle={styles.card}> 
                <View style={styles.textHolder}>
                    <Text style={styles.text}>{text}</Text>
                </View>
                <View style={styles.buttonHolder}>
                    <Button 
                        icon={icon}
                        buttonStyle={styles.button}
                        title={buttonTitle} 
                        color="#1E6738"
                        titleStyle={styles.buttonTitle}
                    />
                </View>
              </Card>
            </View>
          );
      }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderColor: "#fff",
    borderRadius: 10,
    elevation: 5,
    overflow: "hidden",
    marginTop: 30,
  },
  card: {
    width: "100%",
    flex: 3,
    flexDirection: "column",
    margin: 0,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: "white",
  },
  titleHolder: {
    flex: 1,
    justifyContent: "center"
  },
  title: {
    fontSize: 12 / fontScale,
    fontWeight: "900",
    color: "#58508d",
    paddingVertical: 15,
    fontFamily: "IranSans"
  },
  textHolder: {
    flex: 3,
    justifyContent: "center",
    display: "flex",
  },
  text: {
    fontSize: 11 / fontScale,
    fontWeight: "900",
    color: "#333333",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    fontFamily: "IranSans"
  },
  buttonHolder: {
      flex: 1,
      justifyContent: "center"
  },
  button: {
    backgroundColor: colors.darkyellow,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    height: 30,
    justifyContent: "center"
  },
  buttonTitle: {
    fontSize: 11 / fontScale,
    color: "#ffffff",
    fontFamily: "IranSans"
  }
});

export default CardBox;