import * as rssParser from 'react-native-rss-parser';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function getCategories({setReady}) {
    return (new Promise(async (resolve, reject) => {
        try {
            fetch('http://137.74.192.151:8444/v1/categories')
                .then(async (response) => {
                    response = await response.text()
                    await AsyncStorage.setItem('categories', JSON.stringify(response))
                    setReady(true)
                    resolve()
                }).catch((err)=>  {
                    console.log(err)
                    setReady(false)
                    resolve()
                })
        } catch (e) {
            console.log('Error in function', arguments.callee.name, e)
        }
    }))
}

/* fetch('https://news.google.com/rss/search?gl=US&hl=en-US&num=10&q=unicorns&ceid=US:en')
        .then((response) => response.text())
        .then((responseData) => rssParser.parse(responseData))
        .then((rss) => {
            console.log(rss.title);
            console.log(rss.items.length);
        }); */