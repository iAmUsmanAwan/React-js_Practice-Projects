import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './app/store.js'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>   {/* Provides the Redux store, this the second step */}
      <App />
    </Provider>
  </React.StrictMode>,
)
