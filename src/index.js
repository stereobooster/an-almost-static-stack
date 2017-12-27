import React from "react";
// import { hydrate, render } from "react-dom";
import { render } from "react-snap";

// import { render } from 'react-dom';
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
// import { unregister } from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";

import { loadComponents } from "loadable-components";

import { getState } from "loadable-components/snap";
window.snapSaveState = () => getState();

const AppWithRouter = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const rootElement = document.getElementById("root");

// if (rootElement.hasChildNodes()) {
//   loadComponents().then(() => {
//     hydrate(AppWithRouter, rootElement);
//   });
// } else {
//   render(AppWithRouter, rootElement);
// }

render(AppWithRouter, rootElement);
registerServiceWorker();
// unregister();
