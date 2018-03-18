/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import AppNavigator from './routes/AppNavigator';
// import Messages from './services/Messages.js';
import Colors from './constants/Colors';
import { PersistGate } from 'redux-persist/integration/react'

// Adjust styles based on Android/Ios
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  root: {
    flex: 1,
  },
});

export default (props) => {
  // render() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            {/* <Messages /> */}
            <AppNavigator />
          </View>
        </PersistGate>
      </Provider>
    </View>
  );
}

