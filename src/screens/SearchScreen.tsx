import * as React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {DataHelper} from '../helpers/DataHelper';

export const SearchScreen = () => {
  return (
    <ScrollView>
      <View style={styles.flexRow}>
        <View style={styles.topLeftContainer}>
          {[...Array(4)].map((_, index) => (
            <TouchableOpacity key={index}>
              <Image
                style={styles.smallImage}
                source={{
                  uri: 'https://scontent-prg1-1.xx.fbcdn.net/v/t1.6435-9/73166314_2283767265066716_3853575590049218560_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-Vbhbkn3WW0AX8ZZkuB&tn=4LIf-RHnuk0EEmJX&_nc_ht=scontent-prg1-1.xx&oh=00_AT9eua52PowdoqoRFdSG4ZMztlWMOCbvO6qFUPcgAH9CMQ&oe=61FC6469',
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.topRightContainer}>
          <TouchableOpacity>
            <Image
              style={styles.highImage}
              source={{
                uri: 'https://scontent-prg1-1.xx.fbcdn.net/v/t1.6435-9/73166314_2283767265066716_3853575590049218560_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-Vbhbkn3WW0AX8ZZkuB&tn=4LIf-RHnuk0EEmJX&_nc_ht=scontent-prg1-1.xx&oh=00_AT9eua52PowdoqoRFdSG4ZMztlWMOCbvO6qFUPcgAH9CMQ&oe=61FC6469',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.centerContainer}>
        {[...Array(6)].map((_, index) => (
          <TouchableOpacity key={index}>
            <Image
              style={styles.smallImage}
              source={{
                uri: 'https://scontent-prg1-1.xx.fbcdn.net/v/t1.6435-9/73166314_2283767265066716_3853575590049218560_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-Vbhbkn3WW0AX8ZZkuB&tn=4LIf-RHnuk0EEmJX&_nc_ht=scontent-prg1-1.xx&oh=00_AT9eua52PowdoqoRFdSG4ZMztlWMOCbvO6qFUPcgAH9CMQ&oe=61FC6469',
              }}
            />
          </TouchableOpacity>
        ))}

        <View style={styles.flexRow}>
          <View style={styles.bottomLeft}>
            <TouchableOpacity>
              <Image
                style={styles.bigImage}
                source={{
                  uri: 'https://scontent-prg1-1.xx.fbcdn.net/v/t1.6435-9/73166314_2283767265066716_3853575590049218560_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-Vbhbkn3WW0AX8ZZkuB&tn=4LIf-RHnuk0EEmJX&_nc_ht=scontent-prg1-1.xx&oh=00_AT9eua52PowdoqoRFdSG4ZMztlWMOCbvO6qFUPcgAH9CMQ&oe=61FC6469',
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.bottomRight}>
            <TouchableOpacity>
              <Image
                style={styles.smallRightImage}
                source={{
                  uri: 'https://scontent-prg1-1.xx.fbcdn.net/v/t1.6435-9/73166314_2283767265066716_3853575590049218560_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-Vbhbkn3WW0AX8ZZkuB&tn=4LIf-RHnuk0EEmJX&_nc_ht=scontent-prg1-1.xx&oh=00_AT9eua52PowdoqoRFdSG4ZMztlWMOCbvO6qFUPcgAH9CMQ&oe=61FC6469',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.smallRightImage}
                source={{
                  uri: 'https://scontent-prg1-1.xx.fbcdn.net/v/t1.6435-9/73166314_2283767265066716_3853575590049218560_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-Vbhbkn3WW0AX8ZZkuB&tn=4LIf-RHnuk0EEmJX&_nc_ht=scontent-prg1-1.xx&oh=00_AT9eua52PowdoqoRFdSG4ZMztlWMOCbvO6qFUPcgAH9CMQ&oe=61FC6469',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  smallImage: {
    width: DataHelper.getWidth() * 0.33,
    height: DataHelper.getWidth() * 0.33,
    marginTop: DataHelper.getWidth() * 0.003,
    marginLeft: DataHelper.getWidth() * 0.003,
  },
  smallRightImage: {
    width: DataHelper.getWidth() * 0.33,
    height: DataHelper.getWidth() * 0.33,
    marginTop: DataHelper.getWidth() * 0.003,
    marginLeft: DataHelper.getWidth() * 0.003,
  },
  topLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: DataHelper.getWidth() * 0.667,
  },
  topRightContainer: {},
  highImage: {
    width: DataHelper.getWidth() * 0.33,
    height: DataHelper.getWidth() * 0.666,
    marginTop: DataHelper.getWidth() * 0.003,
    marginLeft: DataHelper.getWidth() * 0.003,
  },
  centerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  bottomLeft: {
    width: DataHelper.getWidth() * 0.66,
    height: DataHelper.getWidth() * 0.66,
    marginTop: DataHelper.getWidth() * 0.003,
    marginRight: DataHelper.getWidth() * 0.006,
  },
  bigImage: {
    width: DataHelper.getWidth() * 0.666,
    height: DataHelper.getWidth() * 0.66,
    marginTop: DataHelper.getWidth() * 0.003,
    marginRight: DataHelper.getWidth() * 0.003,
  },
  bottomRight: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
