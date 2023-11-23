import { describe, test, expect } from "vitest";
import { screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// We're using our own custom render function and not React Testing Library's render.
import { renderWithProviders } from "@tests/wrapperProvider";
import App from "@components/App";

describe("App component", () => {
    test("App mounts properly", () => {
        renderWithProviders(<App />);
        const tested = screen;
        expect(tested).toBeTruthy();
    });

    test("App mounts properly", () => {
        renderWithProviders(<App />);
        const tested = screen.getByText(/Starter rapide pour un nouveau projet/i);
        expect(tested).toBeInTheDocument();
    });
});
