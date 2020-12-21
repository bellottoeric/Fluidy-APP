import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Text
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Header() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="black" />
      <ImageBackground style={styles.image} >
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
    justifyContent: "center",
    backgroundColor: "grey"
  },
  text: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Dimensions.get('window').height * 0.03,
    height: Dimensions.get('window').height * 0.045,
  }
});