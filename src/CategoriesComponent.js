import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, ScrollView, View, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Updates from 'expo-updates';
import { ListItem, CheckBox, Divider } from 'react-native-elements'


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function managePreference(value, isSelected) {
    const array = await AsyncStorage.getItem('preference')
    //await sleep(1000) 
    if (!isSelected) {
        if (array) {
            var index = array.indexOf(value)
            if (index === -1) {
                var newArray = JSON.parse(array)
                newArray.push(value)
                await AsyncStorage.setItem('preference', JSON.stringify(newArray))
            }
        } else {
            var newArray = JSON.stringify([value])
            await AsyncStorage.setItem('preference', newArray)
        }
    } else {
        if (array) {
            var newArray = JSON.parse(array)
            var index = newArray.indexOf(value)
            if (index !== -1) {
                newArray.splice(index, 1);
                await AsyncStorage.setItem('preference', JSON.stringify(newArray))
            }
        } else {
        }
    }
}

async function checkBoxStatus(value, setSelection) {
    return(new Promise(async (resolve, reject) => {
        try {
            const [first, setFirst] = useState(true);
            if (first) {
                const array = await AsyncStorage.getItem('preference')
                if (array) {
                    if (array.indexOf(value) !== -1) {
                        setSelection(true)
                    }
                }
                setFirst(false)
            }
        } catch(e) {
            console.log('Error in function', arguments.callee.name, e)
        }
    }))
}

function CheckBoxComponent({ value, setChangeSlider, indexKey }) {
    const [isSelected, setSelection] = useState(false)
    checkBoxStatus(value, setSelection)

    return (
        <TouchableOpacity onPress={async () => {
            setSelection(!isSelected)
            managePreference(value, isSelected, setChangeSlider)
        }}>
            <ListItem key={indexKey} >
                <ListItem.Content>
                    <ListItem.Title>
                        <CheckBox
                            disabled={true}
                            checked={isSelected}
                        />
                        <Text style={styles.textSubcategory}>{value}</Text>
                    </ListItem.Title>
                </ListItem.Content>
            </ListItem>
        </TouchableOpacity>
    )
}

export default function Categories({ setChangeSlider }) {
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        async function checkCategories() {
            var res = []
            var value = await AsyncStorage.getItem('categories')
            if (value !== null) {
                value = JSON.parse(JSON.parse(value))
                for (var i of value) {
                    res.push({"Title": i.lang, "content": i.categories})
                } 
                setCategories(res)
            } else {
                alert('L---app na pas réussi a get le s categories EN DB a changer 3248678')
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
                    <View key={index}>
                        <Text style={styles.titleCategory}>{item.Title}</Text>
                        {item.content.map((value, indexKey) => (
                            <CheckBoxComponent key={indexKey} value={value} setChangeSlider={setChangeSlider} />
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
