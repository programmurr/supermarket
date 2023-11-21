import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { NormalizeCSS } from "./styles/NormalizeCss";
import { GlobalStyles } from "./styles/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* React Router DOM used to simplify navigation. */}
    {/* I try to reduce the number of conditionals deciding what renders
    whenever I can.*/}
    <BrowserRouter>
      {/* Noramilze used instead of Reset to harmonize browser features instead of
      removing them. */}
      <NormalizeCSS />
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
