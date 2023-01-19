import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavigationProvider } from "./context/navigation";

const element = document.getElementById("root");

const root = ReactDOM.createRoot(element);

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
