// TODO Change reducer name
import {
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  AUTH,
  AUTH_ERROR,
  AUTH_SUCCESS,
  GET_BRANCHES,
  GET_BRANCHES_ERROR,
  GET_BRANCHES_SUCCESS,
  CLEAR_ERROR,
  SEEN_ERROR,
  IS_AUTHENTICATED,
  LOGOUT,
  RESET,
  RESET_SUCCESS,
  RESET_ERROR,
} from '../action-types/user';

const initialState = {
  isLogged: false,
  isLoading: false,
  hasSeenError: false,
  showRecovery: false,
  token: null,
  info: {},
  branches: [],
  error: null,
  message: '',
  isResetting: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        isLoading: false,
        showRecovery: false,
        token: action.token,
        info: action.user,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        showRecovery: true,
        error: action.error,
      };
    default:
      return state;
  }
};

export default UserReducer;