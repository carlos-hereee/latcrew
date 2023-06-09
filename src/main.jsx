import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppState } from "./utils/context/AppContext";
import { ServicesState } from "./utils/context/ServicesContext";
import { LogState } from "./utils/context/LogContext";
import { AuthState } from "./utils/context/AuthContext";
import { CalendarState } from "./utils/context/CalendarContext";
import "nexious-library/index.css";
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
