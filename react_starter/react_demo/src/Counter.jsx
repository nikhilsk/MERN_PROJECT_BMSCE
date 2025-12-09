import { useState } from "react";
import './App.css'

function Counter(props) {
    const [count, setCount] = useState(0)
    return (
        <div className="card">
            <div>Button name: {props.name}</div>
            <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
            </button>
      </div>
    )
}

export default Counter;