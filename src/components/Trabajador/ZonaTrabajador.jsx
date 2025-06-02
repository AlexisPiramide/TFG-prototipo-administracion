import { useState } from "react";
import "./../../styles/ZonaTrabajador.css";
import "./../../styles/componentes/Empleados/Escaner.css";
import Escaner from "./Escaner/Escaner";
import CrearPaquete from "./Escaner/CrearPaquete";
export default function ZonaTrabajador() {

    const [modo, setModo] = useState(0);
 

    return (
        <div className="contenido-principal">
            <aside>
                <button className={"boton-escaneo " + (modo===0? "seleccionado":"")} onClick={()=>setModo(0)}>Escanear Código QR</button>
                <button className={"boton-escaneo " + (modo===1? "seleccionado":"")} onClick={()=>setModo(1)}>Crear Paquete</button>
            </aside>
            <main>
                <div className="div-contenido-0">
                    {modo === 0 ? (<Escaner />) : (<CrearPaquete />)}
                </div>
            </main>
        </div>
    );
}