import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from 'react-redux';
import store from "./../store/store";

import './normalize.css'
import './fonts.css'
import { BrowserRouter } from "react-router-dom";


const rootElement = document.getElementById("root") as HTMLElement
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store} >
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);