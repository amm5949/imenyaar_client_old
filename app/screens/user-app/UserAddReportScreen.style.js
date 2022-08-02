import { Dimensions ,StyleSheet , StatusBar} from "react-native";
import colors from "../../config/colors";

const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const styles = StyleSheet.create({

    scrollViewStyle: {
        width: "100%",
    },

    scrollViewBackgroundColor: {
       backgroundColor: "white"
    },

    generalStyle: {
        width: "100%",
        marginBottom: 10,
    },

    cardView: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginBottom: 5,
    },

    container: {
        backgroundColor: "#000",
        justifyContent: "space-between",
        height: windowHeight + (StatusBar.currentHeight > 33 ? StatusBar.currentHeight : 0)
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
        height: 0.5 * windowHeight,
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
    },

    textView: {
        marginTop: 15,
        marginBottom: 10,
        width: "100%"
    },

    statusView: {
        paddingVertical: 3,
        paddingHorizontal: 15,
        position: "absolute",
        left:2,
        borderRadius: 3
    },

    statusText:{
        fontSize: 11/fontScale,
    },

    uploadAudioView:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#f0f2f8",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
    },

    uploadAudioText:{
        fontSize: 11/fontScale,
        color: colors.darkBlue
    },

    nextPrevButtonText: {
        color: colors.darkBlue,
        fontSize: 10 / fontScale,
    },

    nextPrevButtonView:{
        flexDirection: "row",
        alignItems: "center",
    },

    nextPrevButtonIcon:{
        elevation: 8,
        shadowRadius: 10,
        shadowOpacity: 0.3,

        shadowOffset: {
            width: 1,
            height: 3,
        },

        marginHorizontal: 5
    },

    questionAnswerText: {
        fontSize: 10.5 / fontScale,
        width: "80%",
        color: colors.green,
        marginRight: 10,
    },

    questionAnswerView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        marginBottom: 25,
    },

    questionContentText: {
        fontSize: 10.5 / fontScale,
        width: "80%",
        color: "#071c33",
        marginRight: 10,
    },

    questionContentView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        marginBottom: 10,
    },

    questionHeaderView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 10,
    },

    questionButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
});


export {styles};