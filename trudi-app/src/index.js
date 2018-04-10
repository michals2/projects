// npm imports
import React from "react";
import "semantic-ui-css/semantic.min.css";
import { render } from "react-dom";
import { Provider } from "react-redux";

// local imports
import configureStore from "./Redux/store/configureStore";
import App from "./Components/App/App";
import registerServiceWorker from "./registerServiceWorker";

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
