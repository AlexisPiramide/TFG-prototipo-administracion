import ZonaSucursal from "./ZonaSucursal";
import { useOutletContext } from "react-router-dom";

export default function Inicio() {
    const opcion = useOutletContext() || "";

    console.log("Opción:", opcion);

    switch (opcion) {
        case "Zona Administrador":
            return <h1>Zona Administrador</h1>;
        case "Administrador de Sucursal":
            return <ZonaSucursal />;
        case "Incidencias":
            return <h1>Incidencias</h1>;
        case "Configuración":
            return <h1>Configuración</h1>;
    }
}
