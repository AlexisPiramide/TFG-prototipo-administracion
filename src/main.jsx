import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import Inicio from "./components/Inicio";

import "./styles/main.css"
import "./styles/general.css"

const MainContext = createContext();
const router = createBrowserRouter([
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
]);


ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
export { MainContext };