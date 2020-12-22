import React, { useState } from "react";
import { StyleSheet, FlatList, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements'

export default function ListArticles({setInArticles}) {
    return (
        <View>
            <FlatList
                data={[{ title: 'Title Text', key: 'item12' }, { title: 'Title Text', key: 'item11' }, { title: 'Title Text', key: 'item1' }, { title: 'Title Text', key: 'item2' }, { title: 'Title Text', key: 'item3' }]}
                renderItem={({ item }) =>
                    <ListItem onPress={() => {
                        setInArticles(false)
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

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        flex: 1,
    }
});