/** @format */

import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Moviespaths from "../config/Moviespaths";
import Rowtitles from "../config/Rowtitles";
import { info } from "../redux/reducer";
import Row from "./Row";

const Body = () => {
  const data = useSelector(info);
  return (
    <View style={styles.con}>
      {Object.keys(Moviespaths.Movies).map((i,index) => {
        return (
          <Row key={i} title={Rowtitles[i]} category={i} uris={data.all[index]} />
        );
      })}
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  con: {
    overflow: "scroll",
    flex: 1,
    marginLeft: 10,
    width: "100%",
    marginBottom: 50,
  },
});
