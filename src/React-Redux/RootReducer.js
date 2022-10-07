import {combineReducers} from 'redux'; 

import cakeReducer from './Cake/CakeReducer';
import iceCreamReducer from './Ice-Cream/IceCreamReducer';
import userReducer from './User/UserReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
})

export default rootReducer