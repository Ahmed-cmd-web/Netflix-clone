import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Body from '../component/Body';
import Header from '../component/Header';

const Hometab = () => {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Header />
        <Body />
      </ScrollView>
    );
}

export default Hometab

const styles = StyleSheet.create({})
