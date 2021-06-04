import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App nombre="Josue" edad={12}/>
  </StrictMode>,
  rootElement
);
