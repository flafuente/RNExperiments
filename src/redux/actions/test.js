import {
  AsyncStorage,
} from 'react-native';
import { RSAA } from 'redux-api-middleware'; // RSAA = '@@redux-api-middleware/RSAA'
import { store } from '../store';

const REQUEST = 'BRANCHES_REQUEST';
const RECEIVE = {
  type: 'BRANCHES_SUCCESS',
  payload: (action, state, res) => {
    store.dispatch({ type: 'TRIGGER_ACTION', payload: true });
    return res.json().then((data) => ({data}));
  }
};;
const FAILURE = 'BRANCHES_ERROR';


export function getBranches(id = '_glofox') {
  return {
    [RSAA]: {
      endpoint: `https://dev.glofox.com/2.0/clients/?bundle=${id}`,
      method: 'GET',
      types: [REQUEST, RECEIVE, FAILURE]
    }
  };
}