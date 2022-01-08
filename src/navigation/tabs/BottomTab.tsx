import * as React from 'react';
import {Screens} from '../screens/Screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../../screens/HomeScreen';
import {SearchScreen} from '../../screens/SearchScreen';
import {BottomHomeIcon} from '../../assets/bottomtab/BottomHomeIcon';
import {BottomSearchIcon} from '../../assets/bottomtab/BottomSearchIcon';
import {BottomHomeActiveIcon} from '../../assets/bottomtab/BottomHomeActiveIcon';

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
        name={Screens.SEARCH}
        component={SearchScreen}
        options={{
          tabBarIcon: () => {
            return <BottomSearchIcon />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
