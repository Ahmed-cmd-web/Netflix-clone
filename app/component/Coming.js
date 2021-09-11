/** @format */

import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import content from "../config/content";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Player from "./Player";
import { useSelector } from "react-redux";
import { info } from "../redux/reducer";

const Coming = () => {
  const data = useSelector(info);
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.title}>
        <Text
          style={{
            color: colors.textcolor,
            fontSize: content.globalbigfontsize,
            fontWeight: content.globalbigfontweight,
          }}
        >
          {content.comingsoonheadertitle}
        </Text>
        <MaterialCommunityIcons name="cast-connected" size={25} color="white" />
      </View>
      <ScrollView style={styles.con}>
        {data.all[0].map((i) => (
          <Player
            key={i.id}
            srcid={i.id}
            rawgenres={i.genre_ids}
            name={i.name}
            desc={i.overview}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Coming;

const styles = StyleSheet.create({
  con: {
    flex: 1,
    width: "100%",
    marginTop: 100,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    alignItems: "center",
    paddingHorizontal: 30,
    width: "100%",
    height: 100,
    zIndex: 99,
    backgroundColor: colors.backgroundprimarycolor,
  },
});
