/** @format */

import React, { useState } from "react";
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import colors from "../config/colors";
import { info } from "../redux/reducer";
import Poster from "./Poster";
import content from "../config/content";
import { SearchBar } from "react-native-elements";
import Constants from "expo-constants";


const Search = () => {
  const data = useSelector(info);
  const [datapassed, setdatapassed] = useState(data.all[0]);
  const [search, setsearch] = useState("");
  const handle = (e) => {
    setdatapassed(
      data.all[0].filter((i) => i.name.toLowerCase().startsWith(e))
    );
  };

  return (
    <View style={styles.con}>
      <SearchBar
        platform="ios"
        containerStyle={{
          backgroundColor: colors.backgroundColor,
          height: 30,
          marginVertical: 10,
        }}
        clearButtonMode="always"
        autoFocus={true}
        inputStyle={{color:colors.textcolor}}
        searchIcon={{ color: "gainsboro" }}
        inputContainerStyle={{ backgroundColor: colors.dark }}
        cancelButtonProps={{ color: colors.textcolor }}
        placeholderTextColor={"gainsboro"}
        placeholder="Search"
        onBlur={() => setdatapassed(data.all[0])}
        value={search}
        onChangeText={(e) => {
          setsearch(e);
          setdatapassed(data.all[0]);
          if (e === "") return;
          return handle(e.toLowerCase());
        }}
      />

      {datapassed.length > 0 ? (
        <FlatList
          removeClippedSubviews={false} 
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
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  con: {
    flex: 1,
    marginTop:Constants.statusBarHeight

  },
  textinput: {
    height: Platform.OS === "android" ? 50 : 30,
    backgroundColor: "#484848",
  },
});
