/** @format */

import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Poster = ({ uri, size = 100, ...p }) => {
  return (
    <Image
      style={{
        width: size,
        height: size + 50,
        marginRight: 10,
        resizeMode: "contain",
        borderRadius: 5,
        ...p,
      }}
      source={{ uri: `http://image.tmdb.org/t/p/original${uri}` }}
      defaultSource={require("../assets/splash.png")}
    />
  );
};

export default Poster;

const styles = StyleSheet.create({
  con: {},
});
