import * as React from 'react';
import {View, TouchableOpacity, ScrollView, Image, Alert} from 'react-native';
import {PostIcon} from '../assets/icons/PostIcon';
import {LogoIcon} from '../assets/icons/LogoIcon';
import {LikeIcon} from '../assets/icons/LikeIcon';
import {LikeActiveIcon} from '../assets/icons/LikeActiveIcon';
import {MessengerIcon} from '../assets/icons/MessengerIcon';
import {StyleSheet} from 'react-native';
import {AgEnum, Text} from '../components/Text';
import {Colors} from '../styles/Colors';
import {TextHelper} from '../helpers/TextHelper';
import {PostCard} from '../components/PostCard';
import {HistoryData} from '../store/HistoryData';
import {HistoryHelper} from '../helpers/HistoryHelper';
import {IHistory} from '../types/HistoryTypes';
import {PostData} from '../store/PostData';
import {useState} from 'react';

export const HomeScreen = () => {
  const [isLiked, setIsLiked] = useState(false);
  const onLikedPressed = () => {
    Alert.alert('Cancel Pressed');
    console.log('like');
    setIsLiked(!isLiked);
  };
  return (
    <>
      <ScrollView>
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
          {HistoryHelper.getHistory(HistoryData).map(
            (item: IHistory, index) => (
              <View
                key={item.id}
                style={[
                  styles.historyIconContainer,
                  index === 0 && {marginLeft: 6},
                ]}>
                <TouchableOpacity
                  style={[
                    styles.historyIcon,
                    item.active
                      ? styles.historyIconActive
                      : styles.historyIconNotActive,
                  ]}>
                  <Image style={styles.history} source={item.avatar} />
                </TouchableOpacity>
                <Text Ag={AgEnum.SUBTITLE} align={'center'}>
                  {TextHelper.getUserHistoryName(item.name)}
                </Text>
              </View>
            ),
          )}
        </ScrollView>
        {PostData.map(item => (
          <PostCard key={item.id} item={item} />
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
  historyIcon: {
    width: 66,
    height: 66,
    borderRadius: 66,
    borderWidth: 3,
    borderColor: Colors.red,
  },
  historyIconContainer: {
    marginRight: 16,
  },
  historyIconActive: {
    borderWidth: 3,
    borderColor: Colors.red,
  },
  historyIconNotActive: {
    borderWidth: 3,
    borderColor: Colors.gray,
  },
});
