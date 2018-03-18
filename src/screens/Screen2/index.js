import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import { store } from '../../redux/store';


class Screen2 extends Component {

  render() {
    console.log("RENDER 2")
    return (
      <View style={{ flex: 1, marginTop: 30 }}>
        <Text>Screen 2</Text>
        <TouchableWithoutFeedback onPress={() => {
          store.dispatch({ type: 'XX', track: true });
          this.props.navigation.navigate('Screen3', {});
        }}>
          <View><Text>NAVIGATE</Text></View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

Screen2.propTypes = {
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {

};
export default connect(mapStateToProps, mapDispatchToProps)(Screen2);