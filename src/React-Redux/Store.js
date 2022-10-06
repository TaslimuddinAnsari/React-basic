import { legacy_createStore as createStore} from 'redux'
import cakeReducer from './Cake/CakeReducer';


const store = createStore(cakeReducer)
console.log(store)
export default store;