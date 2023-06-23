import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppState } from "./context/AppContext";
import { ServicesState } from "./context/ServicesContext";
import { LogState } from "./context/LogContext";
import { AuthState } from "./context/AuthContext";
import { CalendarState } from "./context/CalendarContext";
import "nexious-library/@index.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LogState>
        <AuthState>
          <AppState>
            <ServicesState>
              <CalendarState>
                <App />
              </CalendarState>
            </ServicesState>
          </AppState>
        </AuthState>
      </LogState>
    </BrowserRouter>
  </React.StrictMode>
);
