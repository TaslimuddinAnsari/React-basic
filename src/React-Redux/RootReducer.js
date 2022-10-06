import {combineReducers} from 'redux'; 

import cakeReducer from './Cake/CakeReducer';
import iceCreamReducer from './Ice-Cream/IceCreamReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducer