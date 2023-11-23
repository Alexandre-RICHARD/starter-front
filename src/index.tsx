import React from "react";
import ReactDOM from "react-dom/client";
import App from "@components/App.tsx";
import "@styles/index.scss";
import { setupStore } from "@store/store.ts";
import { Provider } from "react-redux";

const store = setupStore();

ReactDOM.createRoot(document.getElementById("app")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
