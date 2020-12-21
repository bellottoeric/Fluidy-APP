import * as React from 'react';
import { FlatList, View } from 'react-native';
import { ListItem } from 'react-native-elements'
import ArticlesView from './ArticleView'

export default function ListArticles() {
    return (
        <View>
            <FlatList
                data={[{ title: 'Title Text', key: 'item12' }, { title: 'Title Text', key: 'item11' }, { title: 'Title Text', key: 'item1' }, { title: 'Title Text', key: 'item2' }, { title: 'Title Text', key: 'item3' }]}
                renderItem={({ item }) =>
                    <ListItem>
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