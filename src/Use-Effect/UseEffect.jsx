import React, { useState, useEffect } from "react";

const UseEffect = () => {
    const [count, setcount] = useState(0);
    const [number, setNumber] = useState(0);

    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log("updating number")
        setNumber(count * 2);
    },[count]);

    const handleClick = () => {
        setcount(count + 1);
    };
    useEffect(() =>{
        console.log("fetching data")
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(res => res.json())
        .then(json =>setItems(json))

        // Some effects require cleanup to reduce memory leaks. We need to add return mathod at the end of useEffect
        return () => {
            console.log("Clean up the count");
            setcount(0)
        }
    }, [resourceType])

    return (
        <div className="m-4">
            <h5>useEffect concept</h5>
            <p>Count: {count}</p>
            <button className="btn btn-primary" 
            onClick={handleClick}>
                Increment
            </button>
            <p>Number: {number}</p>
            <button onClick={() =>setResourceType('posts')}>Posts</button>
            <button onClick={() =>setResourceType('users')}>Users</button>
            <button onClick={() =>setResourceType('comments')}>Comments</button>
            <h4>{resourceType}</h4>
            {
                items.map((item)=>
                <pre>{JSON.stringify(item)}</pre>
                )
            }
        </div>
    );
};

export default UseEffect;
