import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import UploadCloudIcon from "./icons/UploadCloudIcon";
import AppButton from "./AppButton";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const EmptyList = (setImages) => (
  <View style={styles.container}>
    <UploadCloudIcon />
    <AppButton
      title={"ارسال فایل"}
      viewStyle={styles.uploadImageButton}
      textStyle={styles.uploadImageButtonText}
      onPress={() =>
        setImages([require("../assets/list_report_screen/building(1).jpg")])
      }
    />
  </View>
);

const UploadButton = (images, setImages) => (
  <View style={styles.uploadButtonContainer}>
    <TouchableHighlight
      onPress={() =>
        setImages([
          ...images,
          require("../assets/list_report_screen/building(2).jpg"),
        ])
      }
      style={styles.uploadButtonView}
      underlayColor={colors.yellow + "55"}
    >
      <MaterialCommunityIcons
        name={"cloud-upload"}
        size={26}
        color={colors.yellow}
      />
    </TouchableHighlight>
  </View>
);

const ImageView = (imageIndex, images, setImages) => (
  <View style={{ alignItems: "center" }}>
    <Image
      source={images[imageIndex]}
      style={styles.picture}
      resizeMode="cover"
    />
    {images[imageIndex] && (
      <TouchableOpacity
        style={{ marginTop: 5 }}
        onPress={() =>
          setImages(images.filter((value, index) => index !== imageIndex))
        }
      >
        <MaterialCommunityIcons
          name="close-circle"
          size={25}
          color={colors.errorRed}
        />
      </TouchableOpacity>
    )}
  </View>
);

const ImageList = (images, setImages, rangeStart, setRangeStart) => {
  const setRange = (next) => {
    if (next && rangeStart === 0 && images.length > 2) setRangeStart(2);
    else if (!next && rangeStart === 2) setRangeStart(0);
    else if (next && rangeStart + 3 < images.length)
      setRangeStart(rangeStart + 3);
    else if (!next && rangeStart - 3 >= 0) setRangeStart(rangeStart - 3);
  };
  return (
    <View style={styles.imageListView}>
      <View style={{ height: 0.087 * windowHeight, justifyContent: "center" }}>
        <TouchableOpacity onPress={() => setRange(false)}>
          <MaterialCommunityIcons name="chevron-left" size={20} />
        </TouchableOpacity>
      </View>

      {rangeStart === 0
        ? UploadButton(images, setImages)
        : ImageView(rangeStart, images, setImages)}
      {ImageView(rangeStart === 0 ? 0 : rangeStart + 1, images, setImages)}
      {ImageView(rangeStart === 0 ? 1 : rangeStart + 2, images, setImages)}

      <View style={{ height: 0.087 * windowHeight, justifyContent: "center" }}>
        <TouchableOpacity onPress={() => setRange(true)}>
          <MaterialCommunityIcons name="chevron-right" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

function UploadImageList(props) {
  const [images, setImages] = useState([]);
  const [rangeStart, setRangeStart] = useState(0);
  return (
    <>
      {images.length === 0
        ? EmptyList(setImages)
        : ImageList(images, setImages, rangeStart, setRangeStart)}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#f0f2f8",
    paddingVertical: 10,
    borderRadius: 10,
  },
  imageListView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  picture: {
    width: 0.25 * windowWidth,
    height: 0.087 * windowHeight,
    borderRadius: 10,
  },
  uploadButtonContainer: {
    width: 0.25 * windowWidth,
    height: 0.087 * windowHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  uploadButtonView: {
    width: 0.078 * windowHeight,
    height: 0.078 * windowHeight,
    borderRadius: 1000,
    borderWidth: 1,
    borderColor: colors.yellow,
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
  },
  uploadImageButton: {
    width: "auto",
    height: "auto",
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === "web" ? 6 : 3,
    backgroundColor: colors.darkBlue,
    borderRadius: 5,
    marginTop: 15,
  },
  uploadImageButtonText: {
    fontSize: 10 / fontScale,
    color: colors.white,
  },
});

export default UploadImageList;
