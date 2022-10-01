const redux = require('redux');
const createStore = redux.createStore

// Action is function and return object
const BUY_CAKE = 'BUY_CAKE'
function buyCake(){
    return {
        type: BUY_CAKE,
        info:'First redux action'
     }
}

// (prevoiusState, action) => newState

const initialState = {
    numberofCake :10
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE : return{
            ...state,
            numberofCake: state.numberofCake -1 
        }

        default: return state
    }
}


// it accept reducer function as parameter
const store = createStore(reducer)

console.log('initial state', store.getStore())

const unSubscriber = store.subscribe(() => console.log('Update state', store.getStore()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unSubscriber()