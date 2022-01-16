import * as React from 'react';
import {Screens} from '../screens/Screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../../screens/HomeScreen';
import {SearchScreen} from '../../screens/SearchScreen';
import {BookmarkScreen} from '../../screens/BookmarkScreen';
import {BottomHomeIcon} from '../../assets/bottomtab/BottomHomeIcon';

import {BottomHomeActiveIcon} from '../../assets/bottomtab/BottomHomeActiveIcon';
import {BookmarkIcon} from '../../assets/icons/BookmarkIcon';

import {BottomSearchIcon} from '../../assets/bottomtab/BottomSearchIcon';
import {BottomSearchActiveIcon} from '../../assets/bottomtab/BottomSearchActiveIcon';

export const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name={Screens.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? <BottomHomeActiveIcon /> : <BottomHomeIcon />;
          },
        }}
      />
      <Tab.Screen
        name={Screens.BOOKMARK}
        component={BookmarkScreen}
        options={{
          tabBarIcon: () => {
            return <BookmarkIcon />;
          },
        }}
      />
      <Tab.Screen
        name={Screens.SEARCH}
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? <BottomSearchActiveIcon /> : <BottomSearchIcon />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
