import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {HomeScreen} from './src/screens/HomeScreen';
import {SearchScreen} from './src/screens/SearchScreen';

export const App = () => {
  return (
    <SafeAreaView>
      {/* <HomeScreen /> */}
      <SearchScreen />
    </SafeAreaView>
  );
};

export default App;
