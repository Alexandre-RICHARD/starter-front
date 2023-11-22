import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "@slices/globalSlice.ts";
import listSlice from "@slices/listSlice.ts";

export const store = configureStore({
    reducer: {
        global: globalSlice,
        list: listSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
