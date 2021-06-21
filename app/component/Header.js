/** @format */

import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import content from "../config/content";
import colors from "../config/colors";
import { Octicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { info } from "../redux/reducer";
import Banner from "./Banner";
import moviegenres from "../config/moviegenres";
import { LinearGradient } from "expo-linear-gradient";

const Header = () => {
  const elite = {
    backdrop_path: "/zobx8Qut1DfxG0j6qMiNqzE27Ah.jpg",
    first_air_date: "2018-10-05",
    genre_ids: [80, 9648, 18],
    id: 76669,
    name: "Elite",
    origin_country: ["ES"],
    original_language: "es",
    original_name: "Élite",
    overview:
      "When three working class kids enroll in the most exclusive school in Spain, the clash between the wealthy and the poor students leads to tragedy.",
    popularity: 294.074,
    poster_path: "/3NTAbAiao4JLzFQw6YxP1YZppM8.jpg",
    vote_average: 8.2,
    vote_count: 6549,
  };
  const data = useSelector(info);
  const poster = Math.floor(Math.random() * data.all[0].length);
  
   
  
  return (
    <View style={styles.con}>
      <LinearGradient
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        colors={["black", "transparent"]}
        style={{
          position: "absolute",
          zIndex: 999,
          width: "100%",
        }}
      >
        <View style={styles.logo}>
          <MaterialCommunityIcons name="netflix" size={40} color="red" />
          <MaterialCommunityIcons
            name="cast-connected"
            size={25}
            color="white"
          />
        </View>
        <View style={styles.cat}>
          <Text style={styles.text}>{content.headersubtitle1}</Text>
          <Text style={styles.text}>{content.headersubtitle2}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.text, { marginRight: 5 }]}>
              {content.headersubtitle3}
            </Text>
            {content.arrowbesidesubtitle3 && (
              <Octicons name="triangle-down" size={15} color="white" />
            )}
          </View>
        </View>
      </LinearGradient>

      <Banner
        src={data.all[0][poster].poster_path}
        genre={data.all[0][poster].genre_ids}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  con: {
    justifyContent: "space-between",
    width: "100%",
    marginTop: Constants.statusBarHeight,
    marginBottom: 20,
    flex: 1,
    alignItems:'center'
  },
  text: {
    color: colors.textcolor,
    fontWeight: content.globalfontweight,
    justifyContent: "flex-start",
    fontSize: content.globalfontsize,
  },
  logo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  cat: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
});
