import React from 'react';
import ReactDOM from 'react-dom';
import "reset-css/reset.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementBuId("root")
);

serviceWorker.unregister(); 

