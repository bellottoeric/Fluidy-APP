import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Text
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
const img =
  'https://images.fineartamerica.com/images-medium-large-5/freedom-abstract-art-jaison-cianelli.jpg';

export default function Header() {
  console.log("header")
  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="black" />
      <ImageBackground style={styles.image} source={{ uri: img }}>
        <Text style={styles.text}> </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  image: {
    width: Dimensions.get('window').width,
    height: 100,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Dimensions.get('window').height * 0.03,
    height: Dimensions.get('window').height * 0.045,
  }
});