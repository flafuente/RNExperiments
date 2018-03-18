import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { View, RefreshControl, Text } from 'react-native';


class Screen3 extends Component {

  render() {
    console.log("RENDER 3");
    return (
      <View style={{ flex: 1 }}>
        <Text>Screen 3</Text>
      </View>
    );
  }
}

Screen3.propTypes = {
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {

};
export default connect(mapStateToProps, mapDispatchToProps)(Screen3);