
import "./../styles/ZonaSucursal.css";

import { useState } from "react";

export default function ZonaSucursal() {
console.log("ZonaSucursal component loaded");

    const sucursales = [
        { id: 1, nombre: "Sucursal 1" },
        { id: 2, nombre: "Sucursal 2" },
        { id: 3, nombre: "Sucursal 3" },
        { id: 4, nombre: "Sucursal 4" },
        { id: 5, nombre: "Sucursal 5" }
    ];

    const [opcion,setOpcion] = useState(0);

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
                <select className="selector-sucursal" value={selectedSucursal} onChange={e => {console.log("Selected:", e.target.value);setSelectedSucursal(Number(e.target.value));}}>
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
                <h2>Zona Sucursal</h2>
                <p>Has seleccionado la sucursal: {sucursales.find(s => s.id === selectedSucursal)?.nombre}</p>
                <p>Opción seleccionada: {opciones[opcion]}</p>
                <div className="contenido-opcion">
                    {opcion === 0 && <p>Información pública de la sucursal.</p>}
                    {opcion === 1 && <p>Información privada de la sucursal.</p>}
                    {opcion === 2 && <p>Lista de empleados de la sucursal.</p>}
                    {opcion === 3 && <p>Información sobre paquetes en la sucursal.</p>}
                </div>
            </main>
        </div>
    )
}