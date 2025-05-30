import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import Embellezedores from "./Embellezedores";

export default function App() {

	const [opcion, setOpcion] = useState("Administrador de Sucursal");

	return (
		<>
			<NavigationBar opcion={opcion} setOpcion={setOpcion} />
			<Outlet context={opcion} />
			<Footer />
			<Embellezedores />
		</>
	);
}
