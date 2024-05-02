import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import PreguntaRespuestaExamen from "./PreguntaRespuestaExamen";

export default function RespuestasExamen() {

    const [usuario] = useOutletContext();
    const [, , , , , , examen] = useOutletContext();
    const [,,,,, setExamenes] = useOutletContext();
    
    const Examen = examen.examen;
    const Respuestas = examen.respuestas.respuestas;
    console.log(Respuestas)
    const [respuestas, setRespuestas] = useState([]);

    return (
        <>
            {examen.examen != undefined ? Examen.map((pregunta, index) => (
                console.log(Respuestas[index],index),
                <PreguntaRespuestaExamen pregunta={pregunta} respuesta={Respuestas[index]} key={index} />
            )) : ''}
        </>
    )
}