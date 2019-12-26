import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./styles/index.css";
import "./styles/index.scss";

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById("app"));
