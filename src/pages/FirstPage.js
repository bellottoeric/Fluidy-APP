// React Native Tab - Example using React Navigation V5 //
// https://aboutreact.com/react-native-tab //
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity, StyleSheet, View, Text, Button, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { WebView } from 'react-native-webview';

const Stack = createStackNavigator();

function HomeScreen({ navigation, itemId }) {
  console.log("TESS")

  return (
    <View style={{ zIndex: 9999, position: "absolute", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile', {
          itemId: 86,
          otherParam: 'anything you want here'
        })}
      />
    </View>
  );
}

function ProfileScreen({ route, navigation }) {
  console.log(route)
  // <WebView source={{ uri: 'https://expo.io' }} style={{ marginTop: 20 }} />;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}



function MyStack() {
  console.log("stak")
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>

    </NavigationContainer >
  );
}

const FirstPage = ({ navigation, propName }) => {
  console.log(propName)
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
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
export default FirstPage;