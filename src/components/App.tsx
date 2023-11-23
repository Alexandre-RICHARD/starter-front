import React from "react";
import type { RootState } from "@store/store.ts";
import { useSelector, useDispatch } from "react-redux";

import { increment, testAddReducer } from "@slices/globalSlice.ts";
import { sum } from "@utilities/sum";

import "./App.scss";


const App: React.FC = () => {
    const { listItems, startingValue } = useSelector((state: RootState) => state.global);
    const dispatch = useDispatch();

    const randomNumber = sum(5, 5);

    return (
        <>
            <p className="title">{ randomNumber } C'est l'heure d'un nouveau projet</p>
            <button className="button" onClick={() => dispatch(increment())}>
                Nombre de clic{startingValue < 2 || "s"} : {startingValue}
            </button>
            <div data-testid="list">
                <h1>Une liste :</h1>
                <ul>
                    {listItems.map((listItem) => {
                        return (
                            <li key={listItem.id} data-testid="list_item">
                                {listItem.description}
                            </li>
                        );
                    })}
                </ul>
                <button
                    role="add-to-list-button"
                    onClick={() =>
                        dispatch(
                            testAddReducer({
                                id: Math.random() * 1000,
                                description: "Un nouvel arrivant dans la liste",
                            })
                        )
                    }
                    className="add-to-list-button">
                    {"Boutton pour en ajouter d'autre"}
                </button>
            </div>
        </>
    );
};

export default App;
