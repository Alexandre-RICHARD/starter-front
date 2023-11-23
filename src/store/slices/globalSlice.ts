import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@store/store";

interface ListItem {
    id: number;
    description: string;
}

interface ListState {
    counterValue: number;
    listItems: ListItem[];
}

const initialState: ListState = {
    counterValue: 0,
    listItems: [
        {
            id: Math.random() * 1000,
            description: "Notre première entrée dans la liste",
        },
    ],
};

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        increment: (state) => {
            state.counterValue += 1;
        },
        testAddReducer: (state, action: PayloadAction<ListItem>) => {
            state.listItems.push(action.payload);
        },
    },
});

export const counterValue = (state: RootState) => state.global.counterValue;
export const listItems = (state: RootState) => state.global.listItems;
export const { increment, testAddReducer } = globalSlice.actions;

export default globalSlice.reducer;
