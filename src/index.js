import React from 'react'
import { hydrate, render } from "react-dom";
import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  // some bug prevents to do hydrate, will figure out later
  // hydrate(<App />, rootElement);
  render(<App />, rootElement);
} else {
  render(<App />, rootElement);

  if (module.hot) {
    module.hot.accept('./App', () => {
      const NextApp = require('./App').default
      render(<NextApp />, rootElement)
    })
  }
}

registerServiceWorker();
