import React, { useRef } from "react";
import { View, Text, Dimensions, ScrollView } from 'react-native'
import { Formik } from "formik";
import AppButton from "../../components/AppButton";
import AppTextInput from "../../components/AppTextInput";
import { styles } from "./ZoneEditScreen.styles.js"
import colors from "../../config/colors";
import BackwardArrowIcon from "../../components/icons/BackwardArrowIcon";
import { updateZone } from "../../api/zones/update";
import { useSelector } from "react-redux/es/exports";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const ZoneCreateScreen = (props) => {
    const ref = useRef();
    console.log(props)
    const item = props.route.params;
    const userData_zones = useSelector((state) => state.user);

    const handleSubmit = async (values) => {
        const data = {
            ...values,
            properties: item.properties,
            project_id: item.project_id
        }
        console.log(data)
        await updateZone(userData_zones?.user.result.tokens.access_token, item.id, data)
        props.navigation.navigate("Zones", {
            screen: "ZoneList",
        })
    }
    return (
        <Formik
            initialValues={{ name: "", details: "" }}
            onSubmit={handleSubmit}
            innerRef={ref}
        >
            {({
                handleChange,
                handleSubmit,
                errors,
                setFieldTouched,
                touched,
                enableReinitialize
            }) => (
                <View style={styles.screenView}>
                    <ScrollView
                        contentContainerStyle={{
                            // flex: 1,
                            minHeight: 0.55 * windowHeight,
                            width: "100%",
                        }}
                    >
                        <View style={styles.formView}>
                            <AppTextInput
                                label="نام زون"
                                onBlur={() => setFieldTouched("name")}
                                onChangeText={handleChange("name")}
                                required
                                value={item.name}
                            />
                            <AppTextInput
                                label="جزئیات"
                                required
                                onBlur={() => setFieldTouched("details")}
                                onChangeText={handleChange("details")}
                                value={item.details}
                            />

                        </View>
                    </ScrollView>
                    <AppButton
                        title="ایجاد زون"
                        color={colors.yellow}
                        viewStyle={{
                            width: "100%",
                        }}
                        textStyle={{
                            fontSize: 14 / fontScale,
                            color: colors.white,
                            marginRight: 3,
                        }}
                        RightIcon={<BackwardArrowIcon size={14} color={colors.white} />}
                        onPress={handleSubmit}
                    />
                </View>
            )}
        </Formik>
    )
}

export default ZoneCreateScreen
