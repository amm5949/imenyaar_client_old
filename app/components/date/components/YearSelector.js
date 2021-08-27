import React from "react";
import { FlatList } from "react-native";
import { getYears } from "../utils";
import { Button } from "./Button";
import { convertToPersianNumber } from "../../UtilFunctions";

const YearSelector = ({
  onYearChange,
  eachYearStyle,
  eachYearTextStyle,
  minYear,
  maxYear,
}) => {
  const selectYear = (year) => () => onYearChange(year);

  const renderYear = ({ item }) => (
    <Button
      key={item}
      title={convertToPersianNumber(item.toString())}
      style={eachYearStyle}
      textStyle={[{ transform: [{ rotateY: "180deg" }] }, eachYearTextStyle]}
      onPress={selectYear(item)}
    />
  );

  return (
    <FlatList
      style={{
        width: "95%",
        alignSelf: "center",
        marginBottom: "3%",
        transform: [{ rotateY: "180deg" }],
      }}
      data={getYears(minYear, maxYear)}
      renderItem={renderYear}
      keyExtractor={(item) => `${item}`}
      numColumns={4}
      removeClippedSubviews
      maxToRenderPerBatch={32}
      initialNumToRender={32}
      windowSize={48}
      getItemLayout={(_, index) => ({
        length: eachYearStyle.height,
        offset: eachYearStyle.height * index,
        index,
      })}
    />
  );
};

export { YearSelector };
