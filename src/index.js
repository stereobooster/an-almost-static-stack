import React from "react";
import { hydrate, render } from "react-dom";
// import { render } from 'react-dom';
import App from "./App";
import "./index.css";
import registerServiceWorker, { unregister } from "./registerServiceWorker";
import Loadable from "react-loadable";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  window.bootReactSnapApp = () => {
    Loadable.preloadReady().then(() => {
      hydrate(<App />, rootElement);
    });
  };
} else {
  render(<App />, rootElement);
}
// render(<App />, rootElement);

// registerServiceWorker();
unregister();
