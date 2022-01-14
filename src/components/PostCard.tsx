import * as React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {BookmarkIcon} from '../assets/icons/BookmarkIcon';
import {CommentIcon} from '../assets/icons/ComentIcon';
import {LikeIcon} from '../assets/icons/LikeIcon';
import {PostIcon} from '../assets/icons/PostIcon';
import {ShareIcon} from '../assets/icons/ShareIcon';
import {AgEnum, Text} from './Text';

export const PostCard = ({item}: any) => {
  return (
    <View>
      <View style={styles.topContainer}>
        <View style={styles.flexRow}>
          <Image style={styles.avatar} source={item.avatar} />
          <Text Ag={AgEnum.SUBTITLE} style={{marginLeft: 9}}>
            {item.name}
          </Text>
        </View>

        <TouchableOpacity>
          <PostIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={item.photo} />
      </View>
      <View style={styles.topContainer}>
        <View style={styles.flexRow}>
          <TouchableOpacity>
            <LikeIcon />
          </TouchableOpacity>

          <TouchableOpacity style={{marginLeft: 14}}>
            <CommentIcon />
          </TouchableOpacity>

          <TouchableOpacity style={{marginLeft: 11}}>
            <ShareIcon />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <BookmarkIcon />
        </TouchableOpacity>
      </View>
      <Text Ag={AgEnum.BODYSTRONG} style={{marginLeft: 12}}>
        {item.likes + ' '} Likes
      </Text>
      <View>
        <Text Ag={AgEnum.SUBTITLE} style={{marginLeft: 12}} numberOfLines={3}>
          <Text Ag={AgEnum.BODYSTRONG} style={{marginLeft: 12}}>
            {item.name + ' '}
          </Text>
          {item.text}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 16,
    paddingTop: 6,
    paddingVertical: 9,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {},
  image: {
    width: '100%',
    height: 375,
  },
});
