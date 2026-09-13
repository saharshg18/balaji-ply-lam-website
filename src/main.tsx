import { StrictMode } from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "@fontsource/cormorant-garamond/latin-500.css";
import "@fontsource/cormorant-garamond/latin-500-italic.css";
import "@fontsource/dm-sans/latin-400.css";
import "@fontsource/dm-sans/latin-500.css";
import "@fontsource/dm-sans/latin-600.css";
import "./index.css";
import App from "./App";

const app = (
  <HelmetProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </HelmetProvider>
);

const root = document.getElementById("root")!;

if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
