import type { RootState } from "@store/store.ts";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "@slices/globalSlice.ts";
import List from "@components/List/List";

import "./App.scss";

// export const sum = (a : number, b : number) : number => {
//     return a + b;
// };

function App() {
    const startingValue = useSelector((state: RootState) => state.global.startingValue);
    const dispatch = useDispatch();

    return (
        <>
            <p className="title">{"C'est l'heure d'un nouveau projet"}</p>
            <button className="button" onClick={() => dispatch(increment())}>
                Nombre de clic{startingValue < 2 || "s"} : {startingValue}
            </button>
            <List />
        </>
    );
}

export default App;
