import 'react-native-gesture-handler';
import { FlatList,  SafeAreaView, ScrollView, StyleSheet, Text, View, Share, Dimensions } from 'react-native';
import * as React from 'react';
import { ListItem, Avatar } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from "./header"
import TabNavigator from 'react-native-tab-navigator';
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
               
            }}
            >
            <Tab.Screen
                name="Home"
                children={() => <FirstPage propName={{ "e": "eee" }} />}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }} 
                />
            <Tab.Screen
                style={styles.container}
                name="SecondPagse"
                component={SecondPage}
                options={{
                    tabBarLabel: 'Setting3',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="settings" color={color} size={size} />
                    ),
                }}

            />

           
                
        </Tab.Navigator>
    );
}

function TabStack2() {
    return (
        <View>
            <FlatList
                horizontal={true}
                style={{ 
                    
                    

                }}
                data={[{ title: 'Title Text', key: 'item12' }, { title: 'Title Text', key: 'item11' }, { title: 'Title Text', key: 'item1' }, { title: 'Title Text', key: 'item2' }, { title: 'Title Text', key: 'item3' }]}
                renderItem={({ item }) => 
                    <ListItem>
                        <ListItem.Content>
                            <ListItem.Title>
                                {item.title}
                            </ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                }
            />
        </View>
    )
}
function News() {
    return (
        <View style={styles.container}>
            <TabStack2></TabStack2>
            <TabStack></TabStack>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'flex-start',
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
    },

});

export default News;