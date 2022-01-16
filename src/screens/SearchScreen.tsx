import React, {useState, useEffect} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {DataHelper} from '../helpers/DataHelper';
import {IFiltered} from '../types/FileredSearchTypes';
import {SearchData} from '../store/SearchData';
import {Screens} from '../navigation/screens/Screens';

export const SearchScreen = ({navigation}) => {
  const [searchWord, setSearchWord] = useState('');
  const [filteredArray, setFilteredArray] = useState([]);

  const onChangeSearchWord = (word: String) => {
    setSearchWord(word.toLowerCase());
    setFilteredArray([]);
  };

  let filteredData: IFiltered[];

  useEffect(() => {
    if (searchWord) {
      filteredData = SearchData.map(el =>
        el.filter(item => item[0].keyword.includes(searchWord)),
      );
      setFilteredArray(filteredData);
    } else {
      setFilteredArray(SearchData);
    }
  }, [searchWord]);

  return (
    <ScrollView>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={word => onChangeSearchWord(word)}
          value={searchWord}
          placeholder="Search"
        />
      </View>
      {filteredArray.map(item => (
        <>
          <View style={styles.flexRow} key={item[0] ? item[0][0].id : null}>
            <View style={styles.topLeftContainer}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(Screens.POST, {
                    itemId: item[0][0].id,
                    item: item[0][0],
                  })
                }>
                <Image
                  style={styles.smallImage}
                  source={item[0] ? item[0][0].photo : null}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(Screens.POST, {
                    itemId: item[1][0].id,
                    item: item[1][0],
                  })
                }>
                <Image
                  style={styles.smallImage}
                  source={item[1] ? item[1][0].photo : null}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(Screens.POST, {
                    itemId: item[2][0].id,
                    item: item[2][0],
                  })
                }>
                <Image
                  style={styles.smallImage}
                  source={item[2] ? item[2][0].photo : null}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(Screens.POST, {
                    itemId: item[3][0].id,
                    item: item[3][0],
                  })
                }>
                <Image
                  style={styles.smallImage}
                  source={item[3] ? item[3][0].photo : null}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.topRightContainer}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(Screens.POST, {
                    itemId: item[4][0].id,
                    item: item[4][0],
                  })
                }>
                <Image
                  style={styles.highImage}
                  source={item[4] ? item[4][0].photo : null}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.centerContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(Screens.POST, {
                  itemId: item[5][0].id,
                  item: item[5][0],
                })
              }>
              <Image
                style={styles.smallImage}
                source={item[5] ? item[5][0].photo : null}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(Screens.POST, {
                  itemId: item[6][0].id,
                  item: item[6][0],
                })
              }>
              <Image
                style={styles.smallImage}
                source={item[6] ? item[6][0].photo : null}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(Screens.POST, {
                  itemId: item[7][0].id,
                  item: item[7][0],
                })
              }>
              <Image
                style={styles.smallImage}
                source={item[7] ? item[7][0].photo : null}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(Screens.POST, {
                  itemId: item[8][0].id,
                  item: item[8][0],
                })
              }>
              <Image
                style={styles.smallImage}
                source={item[8] ? item[8][0].photo : null}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(Screens.POST, {
                  itemId: item[9][0].id,
                  item: item[9][0],
                })
              }>
              <Image
                style={styles.smallImage}
                source={item[9] ? item[9][0].photo : null}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(Screens.POST, {
                  itemId: item[10][0].id,
                  item: item[10][0],
                })
              }>
              <Image
                style={styles.smallImage}
                source={item[10] ? item[10][0].photo : null}
              />
            </TouchableOpacity>

            <View style={styles.flexRow}>
              <View style={styles.bottomLeft}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(Screens.POST, {
                      itemId: item[11][0].id,
                      item: item[11][0],
                    })
                  }>
                  <Image
                    style={styles.bigImage}
                    source={item[11] ? item[11][0].photo : null}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.bottomRight}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(Screens.POST, {
                      itemId: item[12][0].id,
                      item: item[12][0],
                    })
                  }>
                  <Image
                    style={styles.smallRightImage}
                    source={item[12] ? item[12][0].photo : null}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(Screens.POST, {
                      itemId: item[13][0].id,
                      item: item[13][0],
                    })
                  }>
                  <Image
                    style={styles.smallRightImage}
                    source={item[13] ? item[13][0].photo : null}
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
  input: {
    height: 36,
    backgroundColor: 'rgba(118, 118, 128, 0.12)',
    borderRadius: 10,
    margin: 10,
    paddingHorizontal: 10,
    color: 'rgba(60, 60, 67, 0.6)',
  },
});
