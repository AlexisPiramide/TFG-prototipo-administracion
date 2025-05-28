
import "./../styles/ZonaSucursal.css";

import { useState } from "react";
import InformacionPublica from "./Sucursales/Publica/InformacionPublica";

export default function ZonaSucursal() {
    const sucursales = [
        { id: 1, nombre: "Sucursal 1" },
        { id: 2, nombre: "Sucursal 2" },
        { id: 3, nombre: "Sucursal 3" },
        { id: 4, nombre: "Sucursal 4" },
        { id: 5, nombre: "Sucursal 5" }
    ];

    const [opcion, setOpcion] = useState(0);

    const [selectedSucursal, setSelectedSucursal] = useState(sucursales[0].id);
    const opciones = [
        "Informacion Publica",
        "Informacion Privada",
        "Empleados",
        "Paquetes"
    ];

    return (
        <div className="contenido-principal">
            <aside>
                <h4>Sucursal Actual:</h4>
                <select className="selector-sucursal" value={selectedSucursal} onChange={e => { console.log("Selected:", e.target.value); setSelectedSucursal(Number(e.target.value)); }}>
                    {sucursales.map(sucursal => (
                        <option key={sucursal.id} value={sucursal.id}>
                            {sucursal.nombre}
                        </option>
                    ))}
                </select>
                <ul className="opciones-sucursal">
                    {opciones.map((opcionTexto, idx) => (
                        <li key={idx} className={opcion === idx ? "ultimo" : ""} onClick={() => setOpcion(idx)}>
                            {opcionTexto}
                        </li>
                    ))}
                </ul>
            </aside>
            <main>
                <div className={`div-contenido-${opcion}`}>
                    {opcion === 0 && <InformacionPublica />}    
                    {opcion === 1 && <p>Contenido de Información Privada para la Sucursal {selectedSucursal}.</p>}
                    {opcion === 2 && <p>Lista de Empleados de la Sucursal {selectedSucursal}.</p>}
                    {opcion === 3 && <p>Detalles de Paquetes para la Sucursal {selectedSucursal}.</p>}
                </div>
            </main>
        </div>
    )
}