import * as React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {PostIcon} from '../assets/icons/PostIcon';
import {LogoIcon} from '../assets/icons/LogoIcon';
import {LikeIcon} from '../assets/icons/LikeIcon';
import {MessengerIcon} from '../assets/icons/MessengerIcon';
import {StyleSheet} from 'react-native';

export const HomeScreen = () => {
  return (
    <View style={styles.topContainer}>
      <LogoIcon />

      <View style={styles.topContainerIcons}>
        <TouchableOpacity style={{paddingRight: 20}}>
          <PostIcon />
        </TouchableOpacity>
        <TouchableOpacity style={{paddingRight: 20}}>
          <LikeIcon />
        </TouchableOpacity>
        <TouchableOpacity style={{paddingRight: 20}}>
          <MessengerIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 6,
  },
  topContainerIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
