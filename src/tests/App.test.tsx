import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "@components/App";

import { store } from "@store/store.ts";
import { Provider } from "react-redux";

describe("<App />", () => {
    // test("App mounts properly", () => {
    //     render(<Provider store={store}><App /></Provider>);
    //     const tested = screen;
    //     expect(tested).toBeTruthy();
    // });

    // test("App contains title", () => {
    //     render(<Provider store={store}><App /></Provider>);
    //     const tested = screen.getByText("C'est l'heure d'un nouveau projet");
    //     expect(tested).toBeInTheDocument();
    // });

    test("App mounts properly", () => {
        render(<Provider store={store}><App /></Provider>);
        const component = screen;
        expect(component).toBeTruthy();
        const title = screen.getByText("C'est l'heure d'un nouveau projet");
        expect(title).toBeInTheDocument();
    });
});