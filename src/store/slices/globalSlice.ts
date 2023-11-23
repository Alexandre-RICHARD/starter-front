import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@store/store";

interface GlobalState {
    counterStep: number;
    counterValue: number;
}

const initialState: GlobalState = {
    counterStep: 1,
    counterValue: 0
};

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        changeStep: (state, action: PayloadAction<number>) => {
            state.counterStep = action.payload;
        },
        decrement: (state) => {
            state.counterValue -= state.counterStep;
        },
        increment: (state) => {
            state.counterValue += state.counterStep;
        },
    },
});

export const counterStep = (state: RootState) => state.global.counterStep;
export const counterValue = (state: RootState) => state.global.counterValue;
export const { changeStep, decrement, increment } = globalSlice.actions;

export default globalSlice.reducer;
