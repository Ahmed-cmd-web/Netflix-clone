/** @format */

import React, { useState } from "react";
import { FlatList } from "react-native";
import {  StyleSheet, Text, View } from "react-native";
import {  useSelector } from "react-redux";
import colors from "../config/colors";
import content from "../config/content";
import {  info } from "../redux/reducer";
import Poster from "./Poster";

const Row = ({ title, index }) => {
  const data = useSelector(info);
  const [size, setSize] = useState(5);

  return (
    <View>
      <Text style={styles.text}>{title}</Text>

      {
        <FlatList
          contentContainerStyle={{
            marginVertical: 5,
          }}
          onEndReached={() => setSize(size + 7)}
          onEndReachedThreshold={0.1}
          horizontal={true}
          data={[...data.all[index]].splice(0, size)}
          keyExtractor={(item) => item.poster_path}
          renderItem={({ item }) => (
            <Poster uri={item.poster_path} key={item.poster_path} />
          )}
        />
      }
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  text: {
    color: colors.textcolor,
    fontSize: content.globalbigfontsize,
    fontWeight: content.globalbigfontweight,
  },
});
