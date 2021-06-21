/** @format */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import content from "../config/content";
import colors from "../config/colors";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Subheader = () => {
  return (
    <View style={styles.con}>
      <View style={{ alignItems: "center" }}>
        <AntDesign name="plus" size={24} color="white" />
        <Text style={{ color: colors.textcolor, top: 5 }}>
          {content.headerbottomsubtitle1}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: colors.textcolor,
          alignItems: "center",
          justifyContent: "center",
          width: 80,
          height: 30,
        }}
      >
        <Entypo
          name="controller-play"
          size={30}
          color={colors.backgroundprimarycolor}
        />
        <Text style={{ color: colors.backgroundprimarycolor }}>
          {content.headerbottomsubtitle2}
        </Text>
      </View>
      <View>
        <MaterialCommunityIcons
          name="information-outline"
          size={24}
          color={colors.textcolor}
        />
        <Text style={{ color: colors.textcolor, top: 5 }}>
          {content.headerbottomsubtitle3}
        </Text>
      </View>
    </View>
  );
};

export default Subheader;

const styles = StyleSheet.create({
  con: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
  },
});
