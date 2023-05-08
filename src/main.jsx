import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthState } from "./utils/context/AuthContext";
import App from "./App";
import "./stylesheets/index.scss";
import { AppState } from "./utils/context/AppContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthState>
        <AppState>
          <App />
        </AppState>
      </AuthState>
    </BrowserRouter>
  </React.StrictMode>
);
