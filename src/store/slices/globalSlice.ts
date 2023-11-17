import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
    value: number;
}

const initialState = {
    startingValue: 0,
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        increment: (state) => {
            state.startingValue += 1;
        },
    },
});

export const { increment } = globalSlice.actions;

export default globalSlice.reducer;
