import * as React from 'react';
import {View, Text, Button, Pressable} from 'react-native';
import {PostCard} from '../components/PostCard';
import {BackArrowButton} from '../assets/icons/BackArrowButton';

export const PostScreen = ({route, navigation}) => {
  const {itemId, item} = route.params;
  return (
    <View>
      <Pressable style={{padding: 10}} onPress={() => navigation.goBack()}>
        <BackArrowButton />
      </Pressable>
      <PostCard key={itemId} item={item} />
    </View>
  );
};
