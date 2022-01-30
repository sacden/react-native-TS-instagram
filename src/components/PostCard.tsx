import * as React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {BookmarkIcon} from '../assets/icons/BookmarkIcon';
import {CommentIcon} from '../assets/icons/ComentIcon';
import ADIcon from 'react-native-vector-icons/AntDesign';
import {PostIcon} from '../assets/icons/PostIcon';
import {ShareIcon} from '../assets/icons/ShareIcon';
import {AgEnum, Text} from './Text';
import {Screens} from '../navigation/screens/Screens';
import {useNavigation} from '@react-navigation/native';
import {useState, useEffect} from 'react';

export const PostCard = ({item}: any) => {
  const navigation = useNavigation();

  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const onLikePressed = () => {
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    setLikesCount(item.likes);
  }, []);

  return (
    <View>
      <View style={styles.topContainer}>
        <View style={styles.flexRow}>
          <Pressable
            onPress={() =>
              navigation.navigate(Screens.USER, {
                itemId: item.id,
                item: item,
              })
            }>
            <Image style={styles.avatar} source={item.avatar} />
          </Pressable>

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
          <TouchableOpacity onPress={() => onLikePressed()}>
            {isLiked ? (
              <ADIcon name="heart" size={20} color={'#db565b'} />
            ) : (
              <ADIcon name="hearto" size={20} color={'black'} />
            )}
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
        {likesCount + ' '} Likes
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
