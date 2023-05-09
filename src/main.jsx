import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./stylesheets/index.scss";
import { BrowserRouter } from "react-router-dom";
import { AppState } from "./utils/context/AppContext";
import { ServicesState } from "./utils/context/ServicesContext";
import { LogState } from "./utils/context/LogContext";
import { AuthState } from "./utils/context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LogState>
        <AuthState>
          <AppState>
            <ServicesState>
              <App />
            </ServicesState>
          </AppState>
        </AuthState>
      </LogState>
    </BrowserRouter>
  </React.StrictMode>
);
