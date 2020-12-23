import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Updates from 'expo-updates';
import { ListItem, CheckBox, Divider } from 'react-native-elements'

export default function Categories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function checkCategories() {
            var res = []
            var value = await AsyncStorage.getItem('categories')
            if (value !== null) {
                value = JSON.parse( JSON.parse(value))
                for (var i in value) {
                    res.push({"Title": i, "content": value[i]})
                }
                setCategories(res)
            } else {
                alert('Lapp na pas réussi a get les categories EN DB a changer 3248678')
                Updates.reloadAsync()
            }
        }
        checkCategories();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
            {categories[0] && 
                categories.map((item, index) => (
                    <View>
                        <Text style={styles.titleCategory}>{item.Title}</Text>
                        {item.content.map((l, i) => (
                            <ListItem key={i} >
                                <ListItem.Content >
                                    <ListItem.Title >
                                        <CheckBox
                                            checked={false}
                                        />
                                        <Text style={styles.textSubcategory}>{l}</Text>
                                    </ListItem.Title>
                                </ListItem.Content>
                            </ListItem>
                        ))}
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: 1,
                                marginTop: 10
                            }}
                        />
                    </View>
                ))
            }
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
        flex: 1,
        width: Dimensions.get('window').width,
    },
    scrollView: {
        marginHorizontal: 20,
    },
    titleCategory: {
        fontSize: 25,
    },
    textSubcategory: {
        fontSize: 20,
    }
});
