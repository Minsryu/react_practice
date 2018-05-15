import React from "react";
import { render } from "react-dom";
import StorePicker from "./components/StorePicker.js";

import Router from "./components/Router.js";
import App from "./components/App.js";

import "./css/style.css";

render(<Router />, document.querySelector("#main"));
