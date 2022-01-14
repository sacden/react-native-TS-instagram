import * as React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {DataHelper} from '../helpers/DataHelper';
import {SearchData} from '../store/SearchData';

export const SearchScreen = () => {
  return (
    <ScrollView>
      {SearchData.map(item => (
        <>
          <View style={styles.flexRow} key={item[1][0].id}>
            <View style={styles.topLeftContainer}>
              <TouchableOpacity>
                <Image
                  style={styles.smallImage}
                  // source={{
                  //   uri: item[0][0].photo,
                  // }}
                  // source={require('./../assets/images/1.jpeg')}
                  //source={require(`"${item[0][0].photo}"`)}
                  source={item[0][0].photo}
                />
                {/* {console.log(item[0][0].photo)} */}
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={styles.smallImage} source={item[1][0].photo} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={styles.smallImage} source={item[2][0].photo} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={styles.smallImage} source={item[3][0].photo} />
              </TouchableOpacity>
            </View>
            <View style={styles.topRightContainer}>
              <TouchableOpacity>
                <Image style={styles.highImage} source={item[4][0].photo} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.centerContainer}>
            <TouchableOpacity>
              <Image style={styles.smallImage} source={item[5][0].photo} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.smallImage} source={item[6][0].photo} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.smallImage} source={item[7][0].photo} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.smallImage} source={item[8][0].photo} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.smallImage} source={item[9][0].photo} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.smallImage} source={item[10][0].photo} />
            </TouchableOpacity>

            <View style={styles.flexRow}>
              <View style={styles.bottomLeft}>
                <TouchableOpacity>
                  <Image style={styles.bigImage} source={item[11][0].photo} />
                </TouchableOpacity>
              </View>
              <View style={styles.bottomRight}>
                <TouchableOpacity>
                  <Image
                    style={styles.smallRightImage}
                    source={item[12][0].photo}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={styles.smallRightImage}
                    source={item[13][0].photo}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </>
      ))}
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
