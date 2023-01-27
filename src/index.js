import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from "@reduxjs/toolkit";
import {Provider} from "react-redux";

import rootReducer from "./services/Reducers/index";
// const store = configureStore(rootReducer)
const store = configureStore({ reducer: rootReducer });

console.log("data",store)
const root = ReactDOM.createRoot(document.getElementById ('root'));
root.render(
  <Provider store={store}>
    <App />
    </Provider>,
);

reportWebVitals();
