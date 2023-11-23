import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ListItem {
    id: number;
    description: string;
}

interface ListState {
    startingValue: number
    listItems: ListItem[];
}

const initialState: ListState = {
    startingValue: 0,
    listItems: [
        {
            id: Math.random() * 1000,
            description: "Notre première entrée dans la liste",
        },
    ],
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        increment: (state) => {
            state.startingValue += 1;
        },
        testAddReducer: (state, action: PayloadAction<ListItem>) => {
            state.listItems.push(action.payload);
        },
    },
});

export const { increment, testAddReducer } = globalSlice.actions;

export default globalSlice.reducer;
