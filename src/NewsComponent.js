import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import * as Updates from 'expo-updates';

import CategorySlider from './NewsComponent/CategorySlider'
import ListArticles from './NewsComponent/ListArticles'
import ArticleView from './NewsComponent/ArticleView'

// http://localhost:8444/v1/getArticles?lang=Spanish&category=Animales
// http://localhost:8444/v1/categories

export default function News() {
    const [category, setCategory] = useState("Soccer")
    const [inArticles, setInArticles] = useState(false) 

    return (
        <View style={styles.container}>
            <CategorySlider setCategory={setCategory}></CategorySlider>
            {!inArticles && <ListArticles setInArticles={setInArticles} category={category} ></ListArticles>}
            {inArticles && <ArticleView setInArticles={setInArticles} ></ArticleView>}
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