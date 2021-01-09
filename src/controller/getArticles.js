import * as rssParser from 'react-native-rss-parser';

export default function getCategories(lang, category) {
    return (new Promise(async (resolve, reject) => {
        try {
            fetch('http://137.74.192.151:8444/v1/getArticles/?lang=' + lang +'&category=' + category)
                .then(async (response) => {
                    response = await response.text()
                    resolve(response)
                }).catch((err) => {
                    console.log(err)
                    resolve(`err`)
                })
        } catch (e) {
            console.log('Error in function', arguments.callee.name, e)
        }
    }))
}

/*
http://137.74.192.151:8444/v1/getArticles/?lang=French&category=Actualit%C3%A9s
*/