import 'react-native-gesture-handler';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Share, Dimensions } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from "./header"

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabStack() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            tabBarOptions={{
                activeTintColor: '#FFFFFF',
                inactiveTintColor: '#F8F8F8',
                style: {
                    backgroundColor: '#633689',
                },
                labelStyle: {
                    textAlign: 'center',
                },
                indicatorStyle: {
                    borderBottomColor: '#87B56A',
                    borderBottomWidth: 2,
                },
            }}>
            <Tab.Screen
                name="FirstPage"
                children={() => <FirstPage propName={{ "e": "eee" }} />}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen
                name="SecondPage"
                component={SecondPage}
                options={{
                    tabBarLabel: 'Setting',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="settings" color={color} size={size} />
                    ),
                }} />
        </Tab.Navigator>
    );
}

function Footer() {
    return (
        <View style={styles.container}>
            <NavigationContainer independent={true}>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{

                    }}>

                    <Stack.Screen name="TabStack" component={TabStack} options={{ title: 'Tab Stacks' }} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        width: Dimensions.get('window').width,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default Footer;