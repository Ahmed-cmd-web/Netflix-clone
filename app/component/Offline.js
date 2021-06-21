/** @format */

import { useNetInfo } from "@react-native-community/netinfo";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import content from "../config/content";

const Offline = () => {
  return (
    <View style={styles.con}>
      <Text
        style={{
          color: colors.textcolor,
          fontSize: content.globalfontsize,
          marginTop: 30,
          fontWeight: content.globalfontweight,
        }}
      >
        {content.offlinealert}
      </Text>
    </View>
  );
};

export default Offline;

const styles = StyleSheet.create({
  con: {
    backgroundColor: "red",
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});
