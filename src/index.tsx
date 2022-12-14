import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from 'react-redux';
import store from "./store/store";
import { BrowserRouter } from "react-router-dom";

import './assets/styles/common.scss'



const rootElement = document.getElementById("root") as HTMLElement
const root = createRoot(rootElement);
root.render(
    <BrowserRouter>
    <Provider store={store} >
    <App />
    </Provider>
    </BrowserRouter>
);
