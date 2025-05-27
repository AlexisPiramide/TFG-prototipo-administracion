import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
<<<<<<< HEAD
import App from "./components/App";
import Inicio from "./components/ZonaSucursal";

import "./styles/main.css"
import "./styles/general.css"
=======
import App from "./fragments/App";
import LogIn from "./fragments/LogIn";
import Registro from "./fragments/Registro";
import ListaExamenes from "./fragments/ListaExamenes";
import Examen from "./fragments/Examen";
import RespuestasExamen from "./fragments/RespuestasExamen";
>>>>>>> e7ecf77fdca448e169803b6613752deda0fbf3d8

const MainContext = createContext();
const router = createBrowserRouter([
<<<<<<< HEAD
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "", element: <Inicio /> }
		],
	},
	{
		path: "*",
		element: <h1>404</h1>,
	},
=======
  {
    path: "/",
    element: <App />,
    children: [
      { path: "login", element: <LogIn /> },
      { path: "registro", element: <Registro />},
      { path: "examenes", element: <ListaExamenes /> },
      { path: "examen", element: <Examen />},
      { path: "respuestas", element: <RespuestasExamen />}
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
>>>>>>> e7ecf77fdca448e169803b6613752deda0fbf3d8
]);


ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
export { MainContext };