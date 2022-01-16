import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {PostCard} from '../components/PostCard';

export const PostScreen = ({route, navigation}) => {
  const {itemId, item} = route.params;
  return (
    <View>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <PostCard key={itemId} item={item} />
    </View>
  );
};
