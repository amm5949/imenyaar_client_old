import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { Card, Button, Icon } from 'react-native-elements'
import colors from "../config/colors";
import AppText from "./AppText";
import { useFonts } from "expo-font";
import LocationIcon from "./icons/LocationIcon";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function CardBox({
  width = 0.45 * windowWidth,
  title,
  text,
  buttonTitle,
  ButtonIcon,
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
              <Text style={[styles.title, style, { fontFamily: "IranSans" }]}>{title}</Text>
              <Card containerStyle={styles.card}> 
                <View>
                    <Text style={[styles.text, { fontFamily: "IranSans" }]}>{text}</Text>
                </View>
                <Button style={[{ fontFamily: "IranSans" }]}
                    Icon={ButtonIcon}
                    buttonStyle={styles.button}
                    title={buttonTitle} 
                    color="#1E6738"
                    titleStyle={[styles.buttonTitle, { fontFamily: "IranSans" }]}
                />
              </Card>
            </View>
          );
      }
  
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderColor: "#fff",
    borderRadius: 8,
    elevation: 5,
    overflow: "hidden",
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "space-between"
  },
  card: {
    width: "100%",
    margin: 0,
    paddingLeft: 10,
    paddingRight: 10 
    
  },
  title: {
    fontSize: 13 / fontScale,
    fontWeight: 900,
    color: "#58508d",
    paddingVertical: 15
  },
  text: {
    fontSize: 11 / fontScale,
    fontWeight: 900,
    color: "#333333",
    display: "flex",
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
    fontWeight: 900,
    color: "#ffffff",
  }
});

export default CardBox;