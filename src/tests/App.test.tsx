import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "@components/App";

import { store } from "@store/store.ts";
import { Provider } from "react-redux";

describe("<App />", () => {
    test("App mounts properly", () => {
        expect(render(<Provider store={store}><App /></Provider>)).toBeTruthy();
    });

    test("App contains title", () => {
        render(<Provider store={store}><App /></Provider>);
        expect(screen.getByText("C'est l'heure d'un nouveau projet")).toBeInTheDocument();
    });
});