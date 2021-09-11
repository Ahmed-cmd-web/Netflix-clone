/** @format */

import React from "react";
import { StyleSheet,  View } from "react-native";
import LottieView from "lottie-react-native";
import colors from "../config/colors";

const Nanimation = ({ onfinish,loop}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LottieView
        source={require("./../animations/netflix-logo.json")}
        loop={loop}
        autoPlay={true}
        speed={1.1}
        onAnimationFinish={() => {
          return onfinish();
        }}
        style={{
          width: "100%",
          backgroundColor: colors.backgroundprimarycolor,
        }}

      />
    </View>
  );
};

export default Nanimation;

const styles = StyleSheet.create({});
