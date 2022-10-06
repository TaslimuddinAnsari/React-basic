import { BUY_ICECREAM } from "./IceCreamType";

const initialstate = {
    numberOfIceCream:20
}

const iceCreamReducer = (state = initialstate, action) =>{
    switch(action.type) {
        case BUY_ICECREAM :  return{
            ...state, 
            numberOfIceCream: state.numberOfIceCream - 1 
        }

        default:  return state
    }
}

export default iceCreamReducer