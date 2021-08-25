import {useState} from "react";

function Counter () {
    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount((count)  => (Math.max(count -1,0)))  
    }

    const increment = () => {
    setCount(count +1)
    }

    
    return (
        <>
        <h1>Counter</h1>
        <button onClick= {decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
        </>
    )
}

export default Counter