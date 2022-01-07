import * as React from 'react';
import {View, TouchableOpacity, ScrollView, Image, Text} from 'react-native';
import {PostIcon} from '../assets/icons/PostIcon';
import {LogoIcon} from '../assets/icons/LogoIcon';
import {LikeIcon} from '../assets/icons/LikeIcon';
import {MessengerIcon} from '../assets/icons/MessengerIcon';
import {StyleSheet} from 'react-native';
import {AgEnum} from '../components/Text';

export const HomeScreen = () => {
  return (
    <>
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
      <ScrollView
        style={{marginTop: 12}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {[...Array(10)].map((_, index) => (
          <View key={index}>
            <TouchableOpacity
              style={[
                styles.historyIconContainer,
                index === 0 && {marginLeft: 6},
              ]}>
              <Image
                style={styles.history}
                source={{
                  uri: 'https://scontent-prg1-1.xx.fbcdn.net/v/t1.6435-9/73166314_2283767265066716_3853575590049218560_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-Vbhbkn3WW0AX8ZZkuB&tn=4LIf-RHnuk0EEmJX&_nc_ht=scontent-prg1-1.xx&oh=00_AT9eua52PowdoqoRFdSG4ZMztlWMOCbvO6qFUPcgAH9CMQ&oe=61FC6469',
                }}
              />
            </TouchableOpacity>
            <Text Ag={AgEnum.SUBTITLE} align={'center'}>
              Павел Титов
            </Text>
          </View>
        ))}
      </ScrollView>
    </>
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
  history: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: 'white',
  },
  historyIconContainer: {
    marginRight: 16,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: 'red',
  },
});
