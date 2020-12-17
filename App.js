import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Share } from 'react-native';
import * as rssParser from 'react-native-rss-parser';
import { NavigationContainer } from '@react-navigation/native';

import Header from "./src/header"
import Footer from "./src/footer"

import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';
import { Buffer } from 'buffer'
const GoogleNewsRss = require('google-news-rss');

const googleNews = new GoogleNewsRss();

async function e() {
  console.log('--------->fdsgfsg')


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

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer >
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Header} />
        <Tab.Screen name="f" component={Footer} />
      </Tab.Navigator>
    </NavigationContainer >
  );
}
export default function App() {
  //e()
  return (
    <View style={{ flex: 1 }}>
      <Header />

      <MyTabs />
    </View>
  );
}
