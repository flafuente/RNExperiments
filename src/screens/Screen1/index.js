import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { View, RefreshControl, Text, TouchableWithoutFeedback } from 'react-native';
import { store } from '../../redux/store';
class Screen1 extends Component {

  render() {
    console.log("RENDER 1");
    return (
      <View style={{ flex: 1, marginTop: 30 }}>
        <Text>Screen 1</Text>
        <TouchableWithoutFeedback onPress={() => {
          store.dispatch({ type: 'TAP_SCHEDULE_BOOK', track: true });
          this.props.navigation.navigate('Screen3', {});
        }}>
          <View><Text>NAVIGATE</Text></View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

Screen1.propTypes = {
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {

};
export default connect(mapStateToProps, mapDispatchToProps)(Screen1);