import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Share } from 'react-native';
import * as rssParser from 'react-native-rss-parser';
import { NavigationContainer } from '@react-navigation/native';

import Header from "./src/header"
import News from "./src/News"



async function e() {
  
  fetch('https://news.google.com/rss/search?gl=US&hl=en-US&num=10&q=unicorns&ceid=US:en')
    .then((response) => response.text())
    .then((responseData) => rssParser.parse(responseData))
    .then((rss) => {
      console.log(rss.title);
      console.log(rss.items.length);
    });
  /*const result = await Share.share({
    message: 'nasa-s-osiris message http://www.nasa.gov/press-release/nasa-s-osiris-rex-spacecraft-collects-significant-amount-of-asteroid',
    "url": "http://www.nasa.gov/press-release/nasa-s-osiris-rex-spacecraft-collects-significant-amount-of-asteroid",
    "title": "nasa-s-osiris title"
  });*/
}

import {  createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Settings') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Save') {
              iconName = focused ? 'ios-alarm' : 'ios-alarm';
            } else if (route.name === 'News') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'Categories') {
              iconName = focused ? 'ios-analytics' : 'ios-analytics';
            } else if (route.name === 'Options') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Settings" component={Header} />
        <Tab.Screen name="Save" component={News} />
        <Tab.Screen name="News" component={News} />
        <Tab.Screen name="Categories" component={News} />
        <Tab.Screen name="Options" component={News} />
      </Tab.Navigator>
    </NavigationContainer >
  );
}
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Header />

      <MyTabs />
    </View>
  );
}
