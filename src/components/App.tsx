import React from "react";
import "./App.scss";
import type { RootState } from "../store/store.ts";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../store/slice/globalSlice.ts";

// export const sum = (a : number, b : number) : number => {
//     return a + b;
// };

function App() {
    const startingValue = useSelector(
        (state: RootState) => state.global.startingValue
    );
    const dispatch = useDispatch();

    return (
        <div id="app">
            <p>Un début intéressant</p>
            <button onClick={() => dispatch(increment())}>
                Nombre de clic : {startingValue}
            </button>
        </div>
    );
}

export default App;
