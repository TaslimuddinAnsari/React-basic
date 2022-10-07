import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension'
// import cakeReducer from './Cake/CakeReducer';

import rootReducer from './RootReducer';


// const store = createStore(cakeReducer) // only for single reducer
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger, thunk))) // For multiple reducer
export default store;