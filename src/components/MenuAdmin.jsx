import { useEffect, useState } from "react";
import Buscador from "./Buscador";
import "../style/Menu.css";

import AñadirLugar from "./AñadirLugar";
import AñadirDatos from "./AñadirDatos";
import ModificarDatos from "./ModificarDatos";

export default function MenuAdmin() {
    const [localizacion, setLocalizacion] = useState({ municipio: "", localidad: "" });
    const [visible, setVisible] = useState(true);
    const [modificar, setModificar] = useState(false);

    const ocultar = () => {
        setVisible(!visible);
    };

    useEffect(() => {
        console.log(localizacion)
    }, [localizacion]);

    const limpiarLocalizacion = () => {
        setLocalizacion({ municipio: "", localidad: "" });
        setModificar(false); // Resetear el estado de modificar
    };

    return (
        <div className="menu">
            <h1>Menu Admin</h1>
            <button className="ocultar" onClick={ocultar}>{visible ? "Ocultar Buscador" : "Mostrar Buscador"}</button>
            {visible && <Buscador setLocalizacion={setLocalizacion} />}
            <button onClick={limpiarLocalizacion}>Limpiar Localizacion</button>
            {localizacion.municipio && (
                <>
                    <button onClick={() => setModificar(!modificar)}>
                        {modificar ? "Cambiar a Añadir Datos" : "Cambiar a Modificar Datos"}
                    </button>
                    {modificar ? (
                        <AñadirDatos municipio={localizacion.municipio} localidad={localizacion.localidad} />
                    ) : (
                        <ModificarDatos localizacion={localizacion} />
                    )}
                </>
            )}
            {!localizacion.municipio && (
                <div>
                    <h2>Añadir Lugar</h2>
                    <AñadirLugar />
                </div>
            )}
        </div>
    );
}
