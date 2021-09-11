/** @format */

import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import content from "../config/content";
import Subheader from "./Subheader";
import colors from "../config/colors";
import moviegenres from "../config/moviegenres";

const Banner = ({ src, genre }) => {
  const [genres, setgenres] = useState([]);
  const findgenre = (array) => {
    let l = [];
    array?.map((i) => {
      var index = moviegenres.genres.findIndex((v) => v.id == i);
      l.push(moviegenres.genres[index].name);
      return;
    });
    return setgenres(l);
  };
  useEffect(() => {
    findgenre(genre);
  }, []);

  return (
    <View style={styles.con}>
      <Image
        style={styles.img}
        source={{ uri: `http://image.tmdb.org/t/p/original${src}` }}
        defaultSource={require("../assets/splash.png")}
        tint="dark"
      />
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
          alignItems: "baseline",
          height: 50,
          top: 20,
        }}
      >
        {genres.map((i) => (
          <Text
            style={{
              color: colors.textcolor,
              fontSize: content.globalfontsize,
            }}
            key={i}
          >
            {i}
            <Entypo name="dot-single" size={15} color="white" />
          </Text>
        ))}
      </View>
      <Subheader />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  con: {
    zIndex: 99,
    width: "100%",
    flex: 1,
    alignItems: "center",
  },
  img: {
    height: 500,
    width: "100%",
    resizeMode: "stretch",
  },
});
