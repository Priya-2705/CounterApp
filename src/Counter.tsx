import { useState } from 'react';
import './Counter.css';

type CounterProps = {
    initialCount: number;
};

function Counter({ initialCount } : CounterProps) {
    const [count, setCount] = useState(initialCount);

    return (
    <div className="counter-container">
        <h2 className="counter-value">{count}</h2>
        <div className="counter-buttons">
            <button onClick={() => setCount(count + 1)}>➕ Increase</button>
            <button onClick={() => setCount(count - 1)}>➖ Decrease</button>
            <button onClick={() => setCount(initialCount)}>🔁 Reset</button>
        </div>
    </div>
    );
};

export default Counter;