import React from "react";
import { hydrate, render } from "react-dom";
// import { render } from 'react-dom';
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

// render(<App />, rootElement);

registerServiceWorker();
