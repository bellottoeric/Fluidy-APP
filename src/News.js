import 'react-native-gesture-handler';
import { StyleSheet, View, Dimensions } from 'react-native';
import React, { useState } from 'react';
import CategorySlider from './NewsComponent/CategorySlider'
import ListArticles from './NewsComponent/ListArticles'
import ArticleView from './NewsComponent/ArticleView'

function News() {
    const [category, setCategory] = useState("sport")
    const [inArticles, setInArticles] = useState(true)

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

export default News;