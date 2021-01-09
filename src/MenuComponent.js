import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import News from "./NewsComponent"
import Categories from "./CategoriesComponent"

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export default function Menu() {

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
        <Tab.Screen name="Settings" component={News} />
        <Tab.Screen name="Save" component={News} />
        <Tab.Screen name="News" component={News} />
        <Tab.Screen name="Categories" component={Categories}/>
        <Tab.Screen name="Options" component={News} />
      </Tab.Navigator>
    </NavigationContainer >
  );
}