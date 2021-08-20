import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
} from "react-native";
import { Slider } from "react-native-elements";
import colors from "../config/colors";
import AppText from "./AppText";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function AppSlider({
    label,
    minimumValue,
    maximumValue
}) {
    const [count, setState] = useState(1)

    return( 
        <View style={styles.container}>
            <View style={{ width: "100%", alignItems: "center", justifyContent:"space-between", flexDirection: "row"}}>
                <AppText style={styles.text}>{count}/10</AppText>
                <AppText style={styles.text}>{label}</AppText>
            </View>
            
            <Slider
                onValueChange={value => setState(Math.floor(value))}
                minimumValue={1}
                maximumValue={10}
                value= {count}
                thumbProps={{
                    children: (
                        <AppText style={styles.thumbLabel}>{count}</AppText>
                    )
                }}
                thumbStyle={styles.thumb}
                trackStyle={styles.track}
                thumbTintColor="#41cd7d"
                minimumValue={minimumValue}
                maximumValue={maximumValue}
                minimumTrackTintColor="#49e78d"
                maximumTrackTintColor="#d5d7e1"
            />
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        width: "95%",
        marginVertical: 20
    },
    text: {
        fontSize: 11 / fontScale,
        color: "#41cd7d",
        flex: 1,
    },
    thumb: {
        width: 40,
        height: 32,
        backgroundColor: '#58c9d1',
        borderColor: '#58c9d1',
        borderWidth: 14,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
    },
    track: {
        height: 11,
        backgroundColor: '#303030',
      },
    thumbLabel: {
        color: colors.white,
        fontSize: 11 / fontScale,
        flexDirection: 'row'
    }
  })

export default AppSlider;





