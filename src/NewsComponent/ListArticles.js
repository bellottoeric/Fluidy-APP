import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, FlatList, View, Image } from 'react-native';
import { ListItem } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';
import getArticles from '../controller/getArticles'


export default function ListArticles({ setInArticles, category }) {
    const [listCategories, setListCategories] = useState([{ title: 'Loading...', key: '1' }]);


    
    

    useEffect(() => {
        async function findLang() {
            var array = await AsyncStorage.getItem('categories')
            if (array) {
                for (var i of JSON.parse(JSON.parse(array))) {
                    for (var j of i.categories) {
                        if (j.indexOf(category) !== -1) {
                            var allArticles = await getArticles(i.lang, category)
                            if (allArticles !== "err") {
                                setListCategories(JSON.parse(JSON.parse(allArticles)))
                            } else {
                                setListCategories([{ "title": "Error" }])
                            }
                        } 
                    } 
                }
            }
        }
        findLang()
    }, [])

    return (
        <View>
            <FlatList
                data={listCategories}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={async () => {
                        console.log(item)
                        setInArticles(true)
                    }}>
                    <ListItem key={item.title}>
                        <ListItem.Content>
                            <ListItem.Title>
                                {item.title}
                            </ListItem.Title>
                                
                        </ListItem.Content>
                    </ListItem>
                    </TouchableOpacity>

                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        flex: 1,
    }
});