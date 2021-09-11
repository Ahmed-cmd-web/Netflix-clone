/** @format */

import React from "react";
import { Image } from "react-native";

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
      source={{ uri: `http://image.tmdb.org/t/p/w500${uri}` }}
      defaultSource={require("../assets/splash.png")}
    />
  );
};

export default Poster;
