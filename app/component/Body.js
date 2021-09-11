/** @format */

import React, { useState } from "react";
import { FlatList } from "react-native";
import {  StyleSheet, View } from "react-native";
import Moviespaths from "../config/Moviespaths";
import Rowtitles from "../config/Rowtitles";
import Row from "./Row";
import Header from "../component/Header";

const Body = () => {
  const [size, setSize] = useState(1);
  return (
    <View style={styles.con}>
      {
        <FlatList
          onEndReached={() => setSize(size === 8 ? size : size + 1)}
          onEndReachedThreshold={0.1}
          data={Object.keys(Moviespaths.Movies).splice(0, size)}
          ListHeaderComponent={<Header />}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => {
            return (
            <Row
              key={index}
              title={Rowtitles[item]}
              category={item}
              index={index}
            />
          )}}
        />
      }
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
  },
});
