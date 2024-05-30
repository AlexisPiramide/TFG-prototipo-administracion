import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import Login from "./components/Login";
import Menu from "./components/Menu";
import AñadirLugar from "./components/AñadirLugar";
import AñadirDatos from "./components/AñadirDatos";
import ModificarDatos from "./components/ModificarDatos";
import MenuAdmin from "./components/MenuAdmin";
import IsAdmin from "./components/IsAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "login", element: <Login /> },
      { path: "menu", element: <Menu /> }
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      { path: "", element: <MenuAdmin />}
    ],
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
