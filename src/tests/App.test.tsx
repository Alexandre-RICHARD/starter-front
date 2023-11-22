import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "@components/App";

import { store } from "@store/store";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";

describe("App component", () => {
    test("App mounts properly", () => {
        render(<Provider store={store}><App /></Provider>);
        const tested = screen;
        expect(tested).toBeTruthy();
    });

    test("App mounts properly", () => {
        render(<Provider store={store}><App /></Provider>);
        const tested = screen.getByText("C'est l'heure d'un nouveau projet");
        expect(tested).toBeInTheDocument();
    });
});

describe("List component", () => {
    test("List component rightly rendered", () => {
        render(<Provider store={store}><App /></Provider>);
        const tested = screen.getByTestId("list");
        expect(tested).toBeInTheDocument();
    });

    test("One initial List item", () => {
        render(<Provider store={store}><App /></Provider>);
        const tested = screen.getAllByTestId("list_item");
        expect(tested.length).toEqual(1);
    });

    test("test if button is here", () => {
        render(<Provider store={store}><App /></Provider>);
        const tested = screen.getByRole("add-to-list-button");
        expect(tested).toBeInTheDocument();
    });

    test("adds a new data entry to listData after button click", async () => {
        render(<Provider store={store}><App /></Provider>);
        let listItem = screen.getAllByTestId("list_item");
        const button = screen.getByRole("add-to-list-button");
    
        expect(listItem.length).toEqual(1);
        await userEvent.click(button);
        listItem = screen.getAllByTestId("list_item");
        expect(listItem.length).toEqual(2);
    });
});