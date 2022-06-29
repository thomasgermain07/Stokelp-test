import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import theme from "./Style/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import i18n from "./i18n.config";
import { I18nextProvider } from "react-i18next";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router />
          </ThemeProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </I18nextProvider>
  </React.StrictMode>
);
