/** @format */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import content from "../config/content";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";

const Downloads = () => {
  return (
    <View style={styles.con}>
      <View style={styles.title}>
        <Text
          style={{
            color: colors.textcolor,
            fontSize: content.globalbigfontsize,
            fontWeight: content.globalbigfontweight,
          }}
        >
          {content.downloadheadertitle}
        </Text>
        <MaterialCommunityIcons
          name="cast-connected"
          size={25}
          color={colors.textcolor}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ backgroundColor: "#303030", borderRadius: 100 }}>
          <MaterialCommunityIcons
            name="download"
            size={100}
            color="#787878"
            style={{ padding: 20 }}
          />
        </View>
        <Text
          style={{
            color: colors.textcolor,
            fontSize: content.globalbigfontsize,
            fontWeight: content.globalbigfontweight,
            marginVertical: 15,
          }}
        >
          {content.nothingdownloadedtitle}
        </Text>
        <Text
          style={{
            color: colors.textcolor,
            fontSize: content.globalfontsize + 5,
            width: "95%",
            textAlign: "center",
          }}
        >
          {content.nothingdownloadedsubtitle}
        </Text>
      </View>
    </View>
  );
};

export default Downloads;

const styles = StyleSheet.create({
  con: { flex: 1, marginTop: Constants.statusBarHeight },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
});
