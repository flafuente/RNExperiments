import React, { Component } from 'react';
import {
  ActivityIndicator,
  View,
  Text,
} from 'react-native';
import Colors from './../../constants/Colors';


class Loading extends Component {
  render() {
    const { progress } = this.props;
    return (
      <ActivityIndicator size="large" color={Colors.primaryBlue} />
    );
  }
};

export default Loading;