import * as React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {BookmarkIcon} from '../assets/icons/BookmarkIcon';
import {CommentIcon} from '../assets/icons/ComentIcon';
import {LikeIcon} from '../assets/icons/LikeIcon';
import {PostIcon} from '../assets/icons/PostIcon';
import {ShareIcon} from '../assets/icons/ShareIcon';
import {AgEnum, Text} from './Text';

export const PostCard = () => {
  return (
    <View>
      <View style={styles.topContainer}>
        <View style={styles.flexRow}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://scontent-prg1-1.xx.fbcdn.net/v/t1.6435-9/73166314_2283767265066716_3853575590049218560_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-Vbhbkn3WW0AX8ZZkuB&tn=4LIf-RHnuk0EEmJX&_nc_ht=scontent-prg1-1.xx&oh=00_AT9eua52PowdoqoRFdSG4ZMztlWMOCbvO6qFUPcgAH9CMQ&oe=61FC6469',
            }}
          />
          <Text Ag={AgEnum.SUBTITLE} style={{marginLeft: 9}}>
            Pavel Kotov
          </Text>
        </View>

        <TouchableOpacity>
          <PostIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://dokina.timg.cz/2019/05/09/1048145-1498216547-avatar-neytiri-653x367.jpg?1587596281.0',
          }}
        />
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
        100 Likes
      </Text>
      <View>
        <Text Ag={AgEnum.SUBTITLE} style={{marginLeft: 12}} numberOfLines={3}>
          <Text Ag={AgEnum.BODYSTRONG} style={{marginLeft: 12}}>
            Pavel Kotov{' '}
          </Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
          mollitia illo deserunt possimus dicta, quod aliquam, fugiat eligendi
          debitis sed magni, perferendis recusandae tenetur officia ipsa ipsam
          tempore fugit error!
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
