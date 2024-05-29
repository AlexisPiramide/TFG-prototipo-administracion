import { useEffect, useState } from "react";
import Buscador from "./Buscador";
import "../style/MenuAdmin.css";

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
        setModificar(false);
    };

    return (
        <div className="menu">
            <h1>Zona Admin</h1>
            <button className="ocultar" onClick={ocultar}>{visible ? "Ocultar Buscador" : "Mostrar Buscador"}</button>
            {visible && <Buscador setLocalizacion={setLocalizacion} />}
            {localizacion.municipio ? <button className="button-admin" onClick={limpiarLocalizacion}>Limpiar Localizacion</button> : ''}
            {localizacion.municipio && (
                <>
                    <button className="button-admin" onClick={() => setModificar(!modificar)}>
                        {modificar ? "Cambiar a Añadir Datos" : "Cambiar a Modificar Datos"}
                    </button>
                    {modificar ? (
                        <AñadirDatos municipio={localizacion.municipio} localidad={localizacion.localidad} />
                    ) : (
                        <ModificarDatos localizacion={localizacion} />
                    )}
                </>
            )}
            {(!localizacion.municipio) ?  <AñadirLugar /> : ''}
        </div>
    );
}
