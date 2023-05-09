import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthState } from "./utils/context/AuthContext";
import App from "./App";
import "./stylesheets/index.scss";
import { AppState } from "./utils/context/AppContext";
import { ServicesState } from "./utils/context/ServicesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthState>
        <AppState>
          <ServicesState>
            <App />
          </ServicesState>
        </AppState>
      </AuthState>
    </BrowserRouter>
  </React.StrictMode>
);
