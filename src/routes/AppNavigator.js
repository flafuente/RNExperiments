import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { SignedIn } from './Navigator';
import Loading from '../components/Loading';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

class AppNavigator extends Component {
  state = {
    appIsReady: false,
  };
  componentWillReceiveProps(nextProps) {
    this.setState({ appIsReady: true });
  }
  render() {
    const { dispatch, nav, user } = this.props
    // const { dispatch, state } = this.props
    // const addListener = createReduxBoundAddListener("root");
    // const nav = addNavigationHelpers({
    //   dispatch,
    //   state,
    //   addListener
    // });
    // const { isLogged } = this.props.user;
    // if (!this.state.appIsReady) {
    //   return <Loading />;
    // }
    return <SignedIn navigation={addNavigationHelpers({
      dispatch,
      state: nav,
      addListener: createReduxBoundAddListener('root'),
    })} />;

  }
}

AppNavigator.propTypes = {
  nav: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};
const mapStateToProps = ({ nav, user }) => ({
  nav,
  user,
});
// export default connect((state) => {
//   return {
//     nav: state.nav,
//     user: state.user,
//   };
// })
export default connect(mapStateToProps)(AppNavigator);