import { describe, test, expect } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
        const tested = screen.getByText(/C'est l'heure d'un nouveau projet/i);
        expect(tested).toBeInTheDocument();
    });
});

describe("List component", () => {
    test("List component rightly rendered", () => {
        renderWithProviders(<App />);
        const tested = screen.getByTestId("list");
        expect(tested).toBeInTheDocument();
    });

    test("One initial List item", () => {
        renderWithProviders(<App />);
        const tested = screen.getAllByTestId("list_item");
        expect(tested.length).toEqual(1);
    });

    test("test if button is here", () => {
        renderWithProviders(<App />);
        const tested = screen.getByRole("add-to-list-button");
        expect(tested).toBeInTheDocument();
    });

    test("adds a new data entry to listData after button click", async () => {
        renderWithProviders(<App />);
        let listItem = screen.getAllByTestId("list_item");
        const button = screen.getByRole("add-to-list-button");

        expect(listItem.length).toEqual(1);
        await userEvent.click(button);
        listItem = screen.getAllByTestId("list_item");
        expect(listItem.length).toEqual(2);
    });
});
