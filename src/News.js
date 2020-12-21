import 'react-native-gesture-handler';
import { StyleSheet, View, Dimensions } from 'react-native';
import * as React from 'react';
import CategorySlider from './NewsComponent/CategorySlider'
import ListArticles from './NewsComponent/ListArticles'





function News() {
    return (
        <View style={styles.container}>
            <CategorySlider></CategorySlider>
            <ListArticles></ListArticles>
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