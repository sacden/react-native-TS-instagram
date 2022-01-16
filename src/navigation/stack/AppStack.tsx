import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../../screens/HomeScreen';
import {Screens} from '../screens/Screens';
import {BottomTab} from '../tabs/BottomTab';
import {PostScreen} from '../../screens/PostScreen';

export const AppStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Screens.HOME} component={BottomTab} />
      <Stack.Screen name={Screens.POST} component={PostScreen} />
    </Stack.Navigator>
  );
};
