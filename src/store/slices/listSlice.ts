import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ListItem {
    id: number;
    description: string;
  }
  
  interface ListState {
    items: ListItem[];
  }

const initialState: ListState = {
    items: [
        {
            id: Math.random() * 1000,
            description: "Notre première entrée dans la liste",
        },
    ],
};

export const listSlice = createSlice({
    name: "listReducers",
    initialState,
    reducers: {
        testAddReducer: (state, action: PayloadAction<ListItem>) => {
            state.items.push(action.payload);
        },
    },
});

export const { testAddReducer } = listSlice.actions;
export default listSlice.reducer;