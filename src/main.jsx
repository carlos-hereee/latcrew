import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import "nexious-library/@index.css";
import "./index.css";
import { ServicesState } from "./utils/context/services/ServicesContext";
import { AppState } from "./utils/context/app/AppContext";
import { AuthState } from "./utils/context/auth/AuthContext";
import { LogState } from "./utils/context/LogContext";
import { CalendarState } from "./utils/context/calendar/CalendarContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LogState>
        <AuthState>
          <AppState>
            <ServicesState>
              <CalendarState>
                <App>
                  <AppRouter />
                </App>
              </CalendarState>
            </ServicesState>
          </AppState>
        </AuthState>
      </LogState>
    </BrowserRouter>
  </React.StrictMode>
);
