import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { View, RefreshControl, Text, TouchableWithoutFeedback } from 'react-native';
import { NavigationActions } from 'react-navigation';

class Login extends Component {

  render() {
    console.log("RENDER 0");
    return (
      <View style={{ flex: 1, marginTop: 30 }}>
        <Text>Login</Text>
        <TouchableWithoutFeedback onPress={() => {
          const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'Container' }),
            ],
          });
          this.props.navigation.dispatch(resetAction);
          // console.log("Move scene 3", this.props.nav.navigate('Screen3', {}););
          // NavigationActions.navigate({ routeName: 'Screen3' });
          // this.props.navigation.dispatch(navigateAction);
        }}>
          <View><Text>Login</Text></View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

Login.propTypes = {
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {

};
export default connect(mapStateToProps, mapDispatchToProps)(Login);