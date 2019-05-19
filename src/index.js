import React from "react";
import { hydrate, render } from "react-dom";
import App from "./App";
import "./index.css";
// import registerServiceWorker from "./registerServiceWorker";
import { unregister } from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";

const AppWithRouter = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(AppWithRouter, rootElement);
} else {
  render(AppWithRouter, rootElement);
}

// registerServiceWorker();
unregister();
