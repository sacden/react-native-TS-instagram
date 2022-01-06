import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {HomeScreen} from './src/screens/HomeScreen';

export const App = () => {
  return (
    <SafeAreaView>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
