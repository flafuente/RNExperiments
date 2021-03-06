import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
// import { autoRehydrate } from 'redux-persist';
import reducers from './reducers';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'; // Version can be specified in package.json
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import { ScreenTracking } from '../../middlewares/Tracking';
// import Auth from '../../middlewares/Auth';

const persistConfig = {
  key: 'root',
  storage,
  debug: true,
}

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);
const enhancer = compose(
  applyMiddleware(
    thunk,
    // ScreenTracking,
    // Auth,
    // logger, // DEV purposes
    middleware,
  ),
  global.reduxNativeDevTools ?
    global.reduxNativeDevTools(/* options */) :
    noop => noop,
);
let store = createStore(
  persistReducer(persistConfig, reducers),
  undefined,
  compose(enhancer),
);
let persistor = persistStore(store);
// const persistedReducer = persistReducer(persistConfig, reducers)

if (global.reduxNativeDevTools) {
  global.reduxNativeDevTools.updateStore(store);
}
export { store, persistor };
