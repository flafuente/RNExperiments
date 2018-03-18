import { combineReducers } from 'redux';

import UserReducer from './reducers/UserReducer';
import NavigationReducer from './reducers/NavigationReducer';

export default combineReducers({
  user: UserReducer,
  nav: NavigationReducer,
});