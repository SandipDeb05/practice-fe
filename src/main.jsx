import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";
import store from "./store/index.jsx";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Auth0Provider } from "@auth0/auth0-react";
import Backdrop from "./components/Backdrop.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Auth0Provider
    domain="dev-t2tsjkwjkjaif625.us.auth0.com"
    clientId="PcuDAsz71JcB2Fcb6pOyO2Ije7JnIfrF"
    authorizationParams={{
      redirect_uri: "http://localhost:5173/admin/dashboard",
    }}
  >
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
        <Backdrop />
      </QueryClientProvider>
    </Provider>
  </Auth0Provider>
  // </StrictMode>
);
