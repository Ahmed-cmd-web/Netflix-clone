/** @format */

import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import Api from "../Api";
import colors from "../config/colors";
import content from "../config/content";
import { addmovies } from "../redux/reducer";
import Poster from "./Poster";

const Row = ({ title, uris }) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <ScrollView
        contentContainerStyle={{
          marginVertical: 5,
        }}
        horizontal={true}
      >
        {uris?.map((i) => (
          <Poster uri={i.poster_path} key={i.poster_path} />
        ))}
      </ScrollView>
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
