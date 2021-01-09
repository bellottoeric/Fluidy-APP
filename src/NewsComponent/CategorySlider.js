import React, { useRef, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { ListItem } from 'react-native-elements'

export default function CategorySlider() {
    const [listCategories, setListCategories] = useState([{ title: 'Loading...', key: 'item12' }]);
    const refContainer = useRef();
    const isFocused = useIsFocused();

    useEffect(() => {
        async function checkCategories() {
            const value = await AsyncStorage.getItem('preference')
            if (value !== null) {
                var resArray = JSON.parse(value)
                var newArary = []
                for (var i in resArray) {
                    newArary.push({ title: resArray[i], key: i })
                }
                setListCategories(newArary)
            } else {
                alert('Lapp na pas réussi a get les categories EN DB a changer 3248678')
            }
        }
        checkCategories();
    }, [isFocused])
    return (
        <View>
            <FlatList
                ref={refContainer}
                horizontal={true}
                data={listCategories}
                renderItem={({ item }) =>
                    <ListItem onPress={() => {
                        refContainer.current.scrollToIndex({ animated: true, index: 0 })
                    }}>
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