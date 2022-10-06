import { BUY_CAKE } from "./CakeType"

const initialstate = {
    numberOfCakes:10
}

const cakeReducer = (state = initialstate, action) =>{
    console.log(state, action)
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numberOfCakes: state.numberOfCakes - 1 
        }
        default: return state
    }
}

export default cakeReducer;