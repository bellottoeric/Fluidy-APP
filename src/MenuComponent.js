import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import News from "./NewsComponent"
import Categories from "./CategoriesComponent"

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export default function Menu() {
  const [changeSlider, setChangeSlider] = useState(true)

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
        <Tab.Screen name="Settings" children={() => <News changeSlider={changeSlider} />} />
        <Tab.Screen name="Save" children={() => <News changeSlider={changeSlider} />} />
        <Tab.Screen name="News" children={() => <News changeSlider={changeSlider} />} />
        <Tab.Screen name="Categories" children={() => <Categories setChangeSlider={setChangeSlider} />}/>
        <Tab.Screen name="Options" children={() => <News changeSlider={changeSlider} />} />
      </Tab.Navigator>
    </NavigationContainer >
  );
}