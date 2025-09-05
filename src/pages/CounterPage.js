import React from "react";
import { useDispatch, useSelector } from "react-redux";

function CounterPage() {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({ type: "INCREMENT" });
    };

    const decrement = () => {
        dispatch({ type: "DECREMENT" });
    };

    return (
        <div>
            <h1>Счётчик: {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default CounterPage;