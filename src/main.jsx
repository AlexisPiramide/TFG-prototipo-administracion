import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import Login from "./components/Login";
import Registro from "./components/Registro";
import MisCosas from "./components/MisCosas";
import CosaNueva from "./components/CosaNueva";

const [usuario, setUsuario]=useState()
const [error, setError]=useState()




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <MisCosas /> },
      { path: "nueva", element: <CosaNueva /> },
      { path: "login", element: <LogIn  setUsuario={setUsuario} error={error} setError={setError}/> },
      { path: "registro", element: <Registro /> },
    ],
  },
  {
    path: "/admin",
    element: <h1>hola admin</h1>,
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
