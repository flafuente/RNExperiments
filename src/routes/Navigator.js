import React from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';


import Screen1 from './../screens/Screen1';
import Screen2 from './../screens/Screen2';
import Screen3 from './../screens/Screen3';
import Login from './../screens/Login';

const SignedIn = StackNavigator({
  Container: {
    screen: TabNavigator(
      {
        Screen1: {
          screen: Screen1,
        },
        Screen2: {
          screen: Screen2,
        },
        Screen3: {
          screen: Screen3,
        },
      }
    ),
  },
  Login: {
    screen: Login,
  },
}, )
export {
  SignedIn,
};