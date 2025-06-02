import ZonaTrabajador from "./Trabajador/ZonaTrabajador";
import ZonaSucursal from "./Sucursales/ZonaSucursal";
import { useOutletContext } from "react-router-dom";

export default function Inicio() {
    const opcion = useOutletContext() || "";

    switch (opcion) {
        case "Zona Trabajador":
            return <ZonaTrabajador />;
        case "Administrador de Sucursal":
            return <ZonaSucursal />;
        case "Incidencias":
            return <h1>Incidencias</h1>;
        case "Configuración":
            return <h1>Configuración</h1>;
    }
}
