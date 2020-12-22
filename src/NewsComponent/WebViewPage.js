import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { WebView } from 'react-native-webview';

const Stack = createStackNavigator();

function HomeScreen({ setInArticles }) {
  return (
    <View style={{ zIndex: 9999, position: "relative", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Profile"
        onPress={() =>{
          setInArticles(true)
        }}
      />
    </View>
  );
}

function ProfileScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const WebViewPage = ({ setInArticles }) => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="WebViewPage">
        <Stack.Screen name="WebViewPage" children={() => <HomeScreen setInArticles={setInArticles} />} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});

export default WebViewPage;