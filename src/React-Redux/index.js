const redux = require('redux');
const reduxLogger = require('redux--logger');

const createStore = redux.createStore() 
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()
// Action is function and return object
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'
function buyCake(){
    return {
        type: BUY_CAKE,
        info:'First redux action'
     }
}

function buyIceCream() {
    return{
        type: BUY_ICECREAM
    }
}


const initialCakeState = {
    numberofCake:10
}
const CakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE : return{
            ...state,
            numberofCake: state.numberofCake -1 
        }

        default: return state
    }
}
const initialIceCreamState = {
    munberOfIceCream:20
}
const IceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM : return{
            ...state,
            munberOfIceCream: state.munberOfIceCream -1 
        }

        default: return state
    }
}



// (prevoiusState, action) => newState

const initialState = {
    numberofCake :10,
    munberOfIceCream:20
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE : return{
            ...state,
            numberofCake: state.numberofCake -1 
        }

        case BUY_ICECREAM : return{
            ...state,
            munberOfIceCream: state.munberOfIceCream -1 
        }

        default: return state
    }
}


// Handle combine Reducer function

const rootReducer = combineReducers({
    cake: CakeReducer,
    iceCream: IceCreamReducer
})

// it accept reducer function as parameter
// const store = createStore(reducer)

const store = createStore(rootReducer,applyMiddleware(logger))

console.log('initial state', store.getStore())

// const unSubscriber = store.subscribe(() => console.log('Update state', store.getStore()))
const unSubscriber = store.subscribe(() => {}) // For middleware

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

// For the Ice-cream
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())


unSubscriber()