import 'react-native-gesture-handler';
import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WebViewPage from './WebViewPage';
import BruteInfo from './BruteInfo'; 


export default function ArticlesView({}) {
    const Tab = createMaterialTopTabNavigator();

    return ( 
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#FFFFFF',
                inactiveTintColor: '#F8F8F8',
                style: {
                    backgroundColor: '#633689',
                }
            }}
        >
            <Tab.Screen
                name="Website"
                children={() => <WebViewPage propName={{ "e": "eee" }}/>}
                options={{
                    tabBarLabel: 'a changer 7852',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="WebViewPage" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="SecondPagse"
                children={() => <BruteInfo propName={{ "e": "eee" }} />}
                options={{
                    tabBarLabel: 'a changer 7851',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="settings" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}