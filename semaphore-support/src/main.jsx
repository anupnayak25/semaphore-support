import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SemaphoreContextProvider } from "./context/SemaphoreContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SemaphoreContextProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </SemaphoreContextProvider>
  </StrictMode>
);
