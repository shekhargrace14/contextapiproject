import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import {AppProvider} from './Context'


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <AppProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AppProvider>
);

