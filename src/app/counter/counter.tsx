"use client";
import Module from 'module';
import { useState } from 'react';



export default function Counter(){
    const [count, setCount] = useState(0)

    function increaseCount(){
        setCount( c =>  c+1);
    }
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increaseCount}>Increment</button>
        </div>
    )
}
