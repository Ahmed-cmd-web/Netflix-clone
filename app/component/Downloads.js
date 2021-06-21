/** @format */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../config/colors";
import content from "../config/content";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Downloads = () => {
  return (
    <SafeAreaView style={styles.con}>
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
    </SafeAreaView>
  );
};

export default Downloads;

const styles = StyleSheet.create({
  con: { flex: 1 },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
});
