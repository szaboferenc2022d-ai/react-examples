import { useMemo, useRef, useState } from "react";

import "./App.css";

function App() {
    const [selected, setSelected] = useState(0);
    const counter = useRef(0);
    const [other, setOther] = useState(0);

    const costlyResult = useMemo(() => {
        for (let i = 0; i < 2_000_000_000; i++) {
            // Simulate a costly operation
        }
        counter.current += 1;

        return selected * 2;
    },[selected]);

    return (
        <>
            <p>
                Selected: {selected}
                <br />
                Result: {costlyResult}
                <br />
                Other: {other}
                <br />
                Counter: {counter.current}
            </p>

            <button onClick={() => setSelected(1)}>1</button>
            <button onClick={() => setSelected(2)}>2</button>
            <button onClick={() => setSelected(3)}>3</button>
            <button onClick={() => setOther(other + 1)}>Update other state</button>
        </>
    );
}

export default App;
