import { useState } from "react";
import './App.css'

// React concept covered: Props and State
function Counter(props) {
    // Always define state inside the component
    const [count, setCount] = useState(0)
    return (
        // JSX
        <div className="card">
            {/* Accessing props */}
            <div>Button name: {props.name}</div>
            <div>Button description  : {props.describe}</div>
            <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
            </button>
      </div>
    )
}

export default Counter;