import * as React from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import {BackArrowButton} from '../assets/icons/BackArrowButton';
import {UserData} from '../store/UserData';
import {Colors} from '../styles/Colors';
import {DropDownIcon} from '../assets/icons/DropDownIcon';
import {HistoryHelper} from '../helpers/HistoryHelper';
import {IHistoryData} from '../types/IHistoryData';
import {TextHelper} from '../helpers/TextHelper';
import {UserHistoryData} from '../store/UserHistoryData';
import {AgEnum} from '../components/Text';
import {UserGreedIcon} from '../assets/icons/UserGreedIcon';
import {UserReelsIcon} from '../assets/icons/UserReelsIcon';
import {UserSeriesIcon} from '../assets/icons/UserSeriesIcon';
import {UserMentionsIcon} from '../assets/icons/UserMentionsIcon';
import {PostData} from '../store/PostData';
import {Screens} from '../navigation/screens/Screens';
import {DataHelper} from '../helpers/DataHelper';

export const UserScreen = ({navigation, route}) => {
  const {itemId, item} = route.params;

  const filteredUser = UserData.filter(el => el.id === itemId);
  return (
    <ScrollView style={{flex: 1, marginHorizontal: 15}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <View style={styles.avatar}>
          <Image style={styles.avatarIcon} source={filteredUser[0].avatar} />
        </View>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <Text style={{fontWeight: '700', fontSize: 16}}>
            {filteredUser[0].posts}
          </Text>
          <Text style={{fontSize: 13}}>Posts</Text>
        </View>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <Text style={{fontWeight: '700', fontSize: 16}}>
            {filteredUser[0].followers} М
          </Text>
          <Text style={{fontSize: 13}}>Followers</Text>
        </View>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <Text style={{fontWeight: '700', fontSize: 16}}>
            {filteredUser[0].subscribtions}
          </Text>
          <Text style={{fontSize: 13}}>Following</Text>
        </View>
      </View>
      <Text style={{fontWeight: '700', fontSize: 13, marginVertical: 5}}>
        {filteredUser[0].fullname}
      </Text>
      <Text style={{fontSize: 13}}>{filteredUser[0].text}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={styles.buttonSubscribe}
          onPress={() => Alert.alert('Right button pressed')}>
          <Text
            style={{
              color: 'white',
              fontWeight: '700',
              fontSize: 13,
            }}>
            Subscribe
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonMessage}
          onPress={() => Alert.alert('Right button pressed')}>
          <Text
            style={{
              color: 'black',
              fontWeight: '700',
              fontSize: 13,
            }}>
            Message
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonDropdown}
          onPress={() => Alert.alert('Right button pressed')}>
          <DropDownIcon />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{marginTop: 12}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {UserHistoryData.map((item: IHistoryData, index) => (
          <View key={item.id} style={[styles.historyIconContainer]}>
            <TouchableOpacity
              style={[styles.historyIcon, styles.historyIconNotActive]}>
              <Image style={styles.history} source={item.avatar} />
            </TouchableOpacity>
            <Text
              Ag={AgEnum.SUBTITLE}
              style={{
                fontSize: 11,
                paddingTop: 2,
              }}>
              {item.text}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 23,
          paddingTop: 15,
          paddingBottom: 5,
        }}>
        <UserGreedIcon />
        <UserReelsIcon />
        <UserSeriesIcon />
        <UserMentionsIcon />
      </View>
      <View>
        <>
          <View style={styles.flexRow}>
            <View style={styles.centerContainer}>
              {PostData.map(item => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(Screens.POST, {
                      itemId: item.id,
                      item: item,
                    })
                  }>
                  <Image
                    style={styles.smallImage}
                    source={item ? item.photo : null}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 86,
    height: 86,
    borderRadius: 86,
    borderWidth: 3,
    borderColor: Colors.red,
  },
  avatarIcon: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'white',
  },
  buttonSubscribe: {
    backgroundColor: '#1FA1FF',
    width: 150,
    height: 30,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonMessage: {
    backgroundColor: '#fff',
    width: 150,
    height: 30,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderColor: '#CBCBCB',
    borderWidth: 0.7,
    borderStyle: 'solid',
    marginLeft: 10,
  },
  buttonDropdown: {
    backgroundColor: '#fff',
    height: 30,
    padding: 7,
    borderColor: '#CBCBCB',
    borderWidth: 0.7,
    borderStyle: 'solid',
    marginLeft: 10,
    borderRadius: 3,
  },
  history: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: 'white',
  },
  historyIcon: {
    width: 62,
    height: 62,
    borderRadius: 62,
    borderWidth: 1,
    borderColor: Colors.red,
  },
  historyIconContainer: {
    marginRight: 16,

    alignItems: 'center',
  },
  historyIconNotActive: {
    borderWidth: 1,
    borderColor: Colors.gray,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  centerContainer: {
    flexDirection: 'row',

    flexWrap: 'wrap',
  },
  smallImage: {
    width: DataHelper.getWidth() * 0.3,
    height: DataHelper.getWidth() * 0.3,
    marginTop: DataHelper.getWidth() * 0.003,
    marginLeft: DataHelper.getWidth() * 0.003,
  },
});
