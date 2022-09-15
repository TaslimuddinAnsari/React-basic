import React from 'react'
import Component1 from './Component1';
import { useState, createContext, useContext } from "react";
import Component4 from './Component4';

const UserContext = createContext(); // define UserContext and used in Component4
const value = createContext();
const UseContext = () => {

    const [user, setUser] = useState("Jesse Hall");
    const DOB = '15/09/2022';
    return (
        <UserContext.Provider value={user}>
            <value.Provider value={DOB}>
                
            <div className='m-4'>
                <h2>useContext Hook</h2>
                <Component1 />
            </div>

            </value.Provider>
        </UserContext.Provider>
    )
}

export default UseContext;
export {UserContext,value}
