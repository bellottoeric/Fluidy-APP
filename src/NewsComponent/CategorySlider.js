import React, { useRef } from 'react';
import { FlatList, View } from 'react-native';
import { ListItem } from 'react-native-elements'

export default function CategorySlider({category}) {
    const refContainer = useRef();

    return (
        <View>
            <FlatList
                ref={refContainer}
                horizontal={true}
                data={[{ title: 'Title Text', key: 'item12' }, { title: 'Title Text', key: 'item11' }, { title: 'Title Text', key: 'item1' }, { title: 'Title Text', key: 'item2' }, { title: 'Title Text', key: 'item3' }]}
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