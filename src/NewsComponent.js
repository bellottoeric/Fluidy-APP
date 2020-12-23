import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Updates from 'expo-updates';

import CategorySlider from './NewsComponent/CategorySlider'
import ListArticles from './NewsComponent/ListArticles'
import ArticleView from './NewsComponent/ArticleView'

// http://localhost:8444/v1/getArticles?lang=Spanish&category=Animales
// http://localhost:8444/v1/categories

export default function News() {
    const [category, setCategory] = useState("sport")
    const [inArticles, setInArticles] = useState(true) 
      
    useEffect(() => {
        async function checkCategories() {
            const value = await AsyncStorage.getItem('preference')
            if (value !== null) {
                console.log("->", value)
            } else {
                alert('Lapp na pas réussi a get les categories EN DB a changer 3248678')
                //Updates.reloadAsync()
            }
        }
        checkCategories();
    }, []);
    
    return (
        <View style={styles.container}>
            <CategorySlider category={category}></CategorySlider>
            {inArticles && <ListArticles setInArticles={setInArticles}></ListArticles>}
            {!inArticles && <ArticleView setInArticles={setInArticles}></ArticleView>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        flex: 1,
        width: Dimensions.get('window').width,
    }
});