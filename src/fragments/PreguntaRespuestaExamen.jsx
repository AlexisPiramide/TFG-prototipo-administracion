import { useEffect, useState } from "react";
import "../style/Respuestas.css"

export default function PreguntaRespuestaExamen({ pregunta,respuesta}) {

    const [selecionada, setSelecionada] = useState(null);

    const [resultado, setResultado] = useState(false);

    const comprobarRespuesta = () => {
        if (respuestas[numeroPregunta] == pregunta.respuesta) {
            setResultado(true)
        } else {
            setResultado(false)
        }

    }
    
    return (
        <div className="secion-pregunta">
            <h2 className="Pregunta">{pregunta.texto}</h2>
            <ul>

                {(respuesta.respuesta) ? <button style={{ backgroundColor: 'green' }} disabled>{pregunta.pregunta}</button> : <button style={{ backgroundColor: 'red' }} disabled>{pregunta.pregunta}</button>}
                <h3>{pregunta.explicacion}</h3>
            </ul>
            
        </div>
    )


}