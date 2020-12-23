import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

import Header from "./src/HeaderComponent"
import Menu from './src/MenuComponent'
import getCategories from "./src/controller/getCategories"


export default function App() {
  const [ready, setReady] = useState(false);
  
  useEffect(() => {
    async function checkReady() {
      await getCategories({ setReady })
    }
    checkReady();
  }, []);

  if (ready) {
    return (
      <View style={{ flex: 1 }}>
        <Header />

        <Menu />
      </View>
    );
  } else {
    return(
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#00ff00" />
        <Text>A changer 472147</Text>
      </View>
    )
  }
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});