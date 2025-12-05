import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

/**
 * Participant instruction:
 * - Manually uncomment the provider and theme for the assigned design system below.
 * - Only import and use the assigned design system provider.
 */

/* ========== Material UI (example) ========== */
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// const theme = createTheme();
// function Provider({ children }: { children: React.ReactNode }) {
//   return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
// }



/* ========== Fluent UI (example) ========== */
// import { FluentProvider, webLightTheme } from "@fluentui/react-components";
// function Provider({ children }: { children: React.ReactNode }) {
//   return <FluentProvider theme={webLightTheme}>{children}</FluentProvider>;
// }

/* ========== Default Provider (no DS) ========== */
// eslint-disable-next-line react-refresh/only-export-components
function Provider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
