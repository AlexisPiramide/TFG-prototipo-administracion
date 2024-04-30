import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./fragments/App";
import LogIn from "./fragments/LogIn";
import ListaExamenes from "./fragments/ListaExamenes";

const MainContext = createContext();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "login", element: <LogIn /> },
      { path: "examenes", element: <ListaExamenes /> },
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


let usuario;
const setUsuario = () => {}; // Define the variable setUsuario
const error = ""; // Define the variable error
const setError = () => {}; // Define the variable setError
const examenes = []; // Define the variable examenes
const setExamenes = () => {}; // Define the variable setExamenes
const examen = ""; // Define the variable examen
const setExamen = () => {}; // Define the variable setExamen

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainContext.Provider value={{ usuario, setUsuario, error, setError, examenes, setExamenes, examen, setExamen }}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  </React.StrictMode>
);
export { MainContext };