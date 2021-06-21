/** @format */

import React, { useRef, useState } from "react";
import {
  FlatList,
  LayoutAnimation,
  NativeModules,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import colors from "../config/colors";
import { info } from "../redux/reducer";
import Poster from "./Poster";
import { SearchBar } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import content from "../config/content";

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const Search = () => {
  const [width, setwidth] = useState(0);
  const [alignment, setalignment] = useState("center");
  const data = useSelector(info);
  const [datapassed, setdatapassed] = useState(data.all[0]);
  const [search, setsearch] = useState("");
  const _onPress = () => {
    // Animate the update
    LayoutAnimation.easeInEaseOut();
    setwidth(undefined);
    setalignment("left");
  };
  const cancel = () => {
    LayoutAnimation.spring();
    setwidth(0);
    inputRef.current.blur();
    setalignment("center");
    inputRef.current.clear();
  };
  const handle = (e) => {
    setdatapassed(data.all[0].filter((i) => i.name.startsWith(e)));
  };
  const inputRef = useRef(null);

  return (
    <SafeAreaView style={styles.con}>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}
      >
        <View
          style={{
            flex: 1,
            height: Platform.OS === "android" ? 40 : 30,
            alignItems: "center",
          }}
        >
          <TextInput
            ref={inputRef}
            autoFocus={true}
            autoCapitalize="words"
            placeholder="🔍 Search"
            placeholderTextColor="#909090"
            style={[styles.textinput, { textAlign: alignment, width: "98%" }]}
            clearButtonMode="always"
            onFocus={_onPress}
            onBlur={() => setdatapassed(data.all[0])}
            onChangeText={(e) => {
              setdatapassed(data.all[0]);
              if (e === "") return;
              return handle(e);
            }}
          />
        </View>
        <View style={{ width: width }}>
          <Text
            onPress={cancel}
            style={{
              color: colors.textcolor,
              marginHorizontal: 10,
            }}
          >
            Cancel
          </Text>
        </View>
      </View>

      {datapassed.length > 0 ? (
        <FlatList
          removeClippedSubviews={false} // Unmount components when outside of window
          contentContainerStyle={{ paddingHorizontal: 5 }}
          data={datapassed}
          keyExtractor={(i) => i.id}
          renderItem={({ item }) => (
            <Poster
              uri={item.poster_path}
              width={"33%"}
              height={200}
              marginVertical={5}
            />
          )}
          numColumns={3}
        />
      ) : (
        <View
          style={{
            flex: 0.5,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: colors.textcolor,
              fontSize: content.globalbigfontsize + 10,
              fontWeight: content.globalbigfontweight,
            }}
          >
            {content.noresultsfoundalerttitle}
          </Text>
          <Text
            style={{
              color: colors.dark,
              fontSize: content.globalfontsize + 5,
              textAlign: "center",
              marginVertical: 10,
            }}
          >
            {content.noresultsfoundalertsubtitle}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  con: {
    flex: 1,
  },
  textinput: {
    flexDirection: "row",
    height: Platform.OS === "android" ? 50 : 30,
    flex: 1,
    textAlign: "center",
    backgroundColor: "#484848",
    borderRadius: 5,
    padding: 10,
    color: colors.textcolor,
  },
});
