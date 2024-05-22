import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import Login from "./components/Login";
import Registro from "./components/Registro";
import AñadirLugar from "./components/AñadirLugar";
import AñadirDatos from "./components/AñadirDatos";
import ModificarDatos from "./components/ModificarDatos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "login", element: <Login /> }
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      { path: "lugar", element: <AñadirLugar /> },
      { path: "datos", element: <AñadirDatos /> },
      { path: "modificar", element: <ModificarDatos />}
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
