import "./App.scss";
import type { RootState } from "@store/store.ts";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "@slices/globalSlice.ts";

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
        </>
    );
}

export default App;
