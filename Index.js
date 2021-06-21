/** @format */

import AppLoading from "expo-app-loading";
import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import Api from "./app/Api";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Body from "./app/component/Body";
import Header from "./app/component/Header";
import Nanimation from "./app/component/Nanimation";
import Moviespaths from "./app/config/Moviespaths";
import { addmovies, info, setmovie } from "./app/redux/reducer";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Hometab from "./app/Navigation/Hometab";
import Comingsoon from "./app/Navigation/Comingsoon";
import Coming from "./app/component/Coming";
import Navtheme from "./app/Navigation/Navtheme";
import colors from "./app/config/colors";
import Search from "./app/component/Search";
import Searchtab from "./app/Navigation/Searchtab";
import Downloadstab from "./app/Navigation/Downloadstab";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import Offline from "./app/component/Offline";

const Index = () => {
  const net = useNetInfo();
  const Tab = createBottomTabNavigator();
  const [ready, setready] = useState(false);
  const [done, setdone] = useState(false);
  const [internet, setinternet] = useState(
    net.isConnected === false || net.isInternetReachable === false
  );
  const dispatch = useDispatch();
  const handle = async () => {
    try {
      for (let i in Moviespaths.Movies) {
        const res = await Api.getmovies(Moviespaths.Movies[i]);
        dispatch(addmovies(res.results));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setinternet(net.isConnected === false || net.isInternetReachable === false);
  }, [net.isInternetReachable, net.isConnected]);

  if (internet)
    return (
      <View style={{ flex: 1, width: "100%", justifyContent: "center" }}>
        <Offline />
        <Nanimation onfinish={() => setdone(true)} loop={true} />
      </View>
    );

  if (!ready)
    return (
      <AppLoading
        startAsync={() => handle()}
        onError={(error) => {
          handle();
          return console.log("an error ocurred>>>", error);
        }}
        onFinish={() => {
          setready(true);
        }}
      />
    );
  if (ready && !done)
    return <Nanimation onfinish={() => setdone(true)} loop={false} />;
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <NavigationContainer theme={Navtheme}>
        <Tab.Navigator
          tabBarOptions={{
            style: {
              backgroundColor: colors.backgroundprimarycolor,
            },
            activeTintColor: colors.textcolor,
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen
            name="Home"
            component={Hometab}
            options={{
              tabBarIcon: ({ size, color }) => (
                <AntDesign name="home" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Coming soon"
            component={Comingsoon}
            options={{
              tabBarIcon: ({ size, color }) => (
                <MaterialCommunityIcons
                  name="animation-play"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={Searchtab}
            options={{
              tabBarIcon: ({ size, color }) => (
                <Ionicons name="md-search-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Downloads"
            component={Downloadstab}
            options={{
              tabBarIcon: ({ size, color }) => (
                <MaterialCommunityIcons
                  name="download"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
