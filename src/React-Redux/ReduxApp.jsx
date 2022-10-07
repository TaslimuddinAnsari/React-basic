import React from 'react'
import CakeContainer from './CakeContainer'
import { Provider } from 'react-redux';
import store from './Store';
import HooksCakeContainer from './HooksCakeContainer';
import IceCreamCntainer from './IceCreamCntainer';
import HooksIceCream from './HooksIceCream';
import NewCakeContainer from './NewCakeContainer';
import ItemContainer from './ItemContainer';
import UserContainer from './UserContainer';
const ReduxApp = () => {
    console.log(store)
    return (
        <Provider store={store}>
            <div className='text-center m-4'>
                
                <ItemContainer cake />
                <ItemContainer/>

                {/* <CakeContainer /> */}
                <HooksCakeContainer/>

                <HooksIceCream/>
                {/* <IceCreamCntainer/> */}

                <NewCakeContainer/>

                <UserContainer />
            </div>
        </Provider>
    )
}

export default ReduxApp
