import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@store/store";
import { testAddReducer } from "@slices/listSlice";

import "./List.scss";

const List: React.FC = () => {
    const listState = useSelector((state: RootState) => state.list.items);
    const dispatch = useDispatch();

    return (
        <div data-testid="list">
            <h1>Une liste :</h1>
            <ul>
                {listState.map((listItem) => {
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
                            description: "Un nouvel arrivant dans la liste"
                        })
                    )
                }
                className="add-to-list-button">
                {"Boutton pour en ajouter d'autre"}
            </button>
        </div>
    );
};

export default List;
