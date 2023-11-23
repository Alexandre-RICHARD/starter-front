import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import type { AppStore, RootState } from "@store/store";
import globalSlice from "@slices/globalSlice.ts";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
    preloadedState?: PreloadedState<RootState>;
    store?: AppStore;
}

export const renderWithProviders = (
    ui: React.ReactElement,
    {
        preloadedState = {},
        // Automatically create a store instance if no store was passed in
        store = configureStore({ reducer: { global: globalSlice }, preloadedState }),
        ...renderOptions
    }: ExtendedRenderOptions = {}
) => {
    const Wrapper = ({ children }: PropsWithChildren<NonNullable<unknown>>): JSX.Element => {
        return <Provider store={store}>{children}</Provider>;
    };

    // Return an object with the store and all of React Testing Library's query functions
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
