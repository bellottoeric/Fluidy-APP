import * as React from 'react';
import { TouchableOpacity, View, Text, SafeAreaView } from 'react-native';

const BruteInfo = ({ setInArticles }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            Setting{'\n'}(You are on SecondPage)
          </Text>
          <TouchableOpacity
            onPress={() => setInArticles(true)}>
            <Text>Go to Home Tab</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
        React Native Tab Navigation
        </Text>
        <Text
          style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default BruteInfo;