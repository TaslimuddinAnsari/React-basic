import React from 'react'
import CakeContainer from './CakeContainer'
import { Provider } from 'react-redux';
import store from './Store';
import HooksCakeContainer from './HooksCakeContainer';
const ReduxApp = () => {
    console.log(store)
    return (
        <Provider store={store}>
            <div className='text-center m-4'>
                {/* <CakeContainer /> */}
                <HooksCakeContainer/>
            </div>
        </Provider>
    )
}

export default ReduxApp
