import { createBrowserRouter, RouterProvider } from "react-router";
import AppRoutes from "./routes/AppRoutes";

const routes = createBrowserRouter([...AppRoutes]);

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
