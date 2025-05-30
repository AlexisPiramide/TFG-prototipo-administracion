import DatosPublicos from "./DatosPublicos";
import DireccionPublica from "./DireccionPublica";
import TablaPublica from "./TablaPublica";

import "./../../../styles/componentes/Publica/InformacionPublica.css";
import { useEffect, useState } from "react";

export default function InformacionPublica() {
    
    const [horarios,setHorarios] = useState();
    const [horariosCambiados, setHorariosCambiados] = useState();
    
    const [datosPublicos, setDatosPublicos] = useState();
    const [datosPublicosCambiados, setDatosPublicosCambiados] = useState();

    const [direccion, setDireccion] = useState();
    const [direccionPublica, setDireccionPublica] = useState();

    useEffect(()=>{
        //recogidaDatos();
        console.log("Cargando datos de horarios y datos públicos...");
    },[]);

    const recogidaDatos = async (datos) => {
       setHorarios(await fetch("https://api.example.com/horarios"));
       setDatosPublicos(await fetch("https://api.example.com/datosPublicos"));
       setDireccion(await fetch("https://api.example.com/direccion"));
    };
    
    return (
        <>
            <div className="tabla-publica">
                <TablaPublica datos={horarios} setDatosCambiados={setHorariosCambiados} />
            </div>
            <div className="datos-publicos">
                <div className="informacion-publica">
                    <DatosPublicos datos={datosPublicos} setDatosCambiados={setDatosPublicosCambiados}/>
                </div>
                <div className="direccion-publica">
                    <DireccionPublica datos={direccion} setDatosCambiados={setDireccionPublica} />
                </div>
            </div>
            <div className="boton-publicos">
                <button className="boton-publico" disabled={!horariosCambiados && !datosPublicosCambiados}>
                    Guardar Cambios
                </button>
            </div>
        </>
    );
}
