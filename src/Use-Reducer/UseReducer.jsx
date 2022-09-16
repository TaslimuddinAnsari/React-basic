import React, { useReducer } from 'react'


// Defining the initial state and the reducer
const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "add":
            return state + 1;
        case "subtract":
            return state - 1;
        case "reset":
            return 0;
        default:
            throw new Error("Unexpected action");
    }
}

const user = [
    { id: 1, firstName: "Ricky" },
    { id: 2, firstName: "Alice" },
    { id: 3, firstName: "John" },
];

const reducer1 = (state, { type, payload }) => {
    if (type === "delete") {
      return state.filter((contact) => contact.id !== payload);
    } else {
      return state;
    }
  };

const UseReducer = () => {

    // Initialising useReducer hook
    const [count, dispatch] = useReducer(reducer, initialState);
    const [userData, dispatch1] = useReducer(reducer1, user);

    return (
        <div className='m-4'>
            <h4>{count}</h4>
            <button onClick={() => dispatch("add")}>
                add
            </button>
            <button onClick={() => dispatch("subtract")}>
                subtract
            </button>
            <button onClick={() => dispatch("reset")}>
                reset
            </button>


            <h3>For Delete one user</h3>
            <div className="col-md-4">
                {userData.map(({ id, firstName }) => (
                    <div className="" key={id} >
                        <h3>{firstName}</h3>
                        <button className="btn btn-sm btn-danger m-2"
                            onClick={() => dispatch1({ type: "delete", payload: id })}>
                            delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UseReducer
