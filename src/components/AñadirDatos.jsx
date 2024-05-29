import { useState } from "react";
import { useOutletContext } from "react-router-dom"
import { postTiempo } from "../services/tiempo.service"
import '../style/AñadirDatos.css'
export default function AñadirDatos({municipio,localidad}) {

    const [usuario, setUsuario] = useOutletContext()
    const [dia, setDia] = useState(null)
    const [temperatura_maxima, setTemperatura_maxima] = useState(null)
    const [temperatura_minima, setTemperatura_minima] = useState(null)
    const [humedad_media, setHumedad_media] = useState(null)
    const [viento_maxima, setViento_maxima] = useState(null)
    const [viento_minima, setViento_minima] = useState(null)
    const [probabilidad_precipitacion, setProbabilidad_precipitacion] = useState(null)

    const enviarFormulario = async (e) => {
        e.preventDefault();

        const tiempo = {
            dia: dia,
            temperatura_maxima: temperatura_maxima,
            temperatura_minima: temperatura_minima,
            humedad_media: humedad_media,
            viento_maxima: viento_maxima,
            viento_minima: viento_minima,
            probabilidad_precipitacion: probabilidad_precipitacion,
            municipio: municipio,
            localidad: localidad,
            usuario: usuario.email
        }

        const result = await postTiempo(tiempo);

        if(result){
            Navigate("/menu")
        }
        
    };

    return (
        <div className="añadir-datos">
            <h1>Añadir Lugar</h1>
            <form onSubmit={(e)=>{enviarFormulario(e)}}>
                <label className="label">Dia</label>
                <input className="input" type="date" name="dia" onChange={(e)=>(setDia(e.target.value))}/>
                <label className="label">Temperatura Máxima</label>
                <input className="input" type="number" name="temperatura_maxima" onChange={(e)=>(setTemperatura_maxima(e.target.value))}/>
                <label className="label">Temperatura Mínima</label>
                <input className="input" type="number" name="temperatura_minima" onChange={(e)=>(setTemperatura_minima(e.target.value))}/>
                <label className="label">Humedad Media</label>
                <input className="input" type="number" name="humedad_media" onChange={(e)=>(setHumedad_media(e.target.value))}/>
                <label className="label">Viento Máxima</label>
                <input className="input" type="number" name="viento_maxima" onChange={(e)=>(setViento_maxima(e.target.value))}/>
                <label className="label">Viento Mínima</label>
                <input className="input" type="number" name="viento_minima" onChange={(e)=>(setViento_minima(e.target.value))}/>
                <label className="label">Probabilidad de Precipitación</label>
                <input className="input" type="number" name="probabilidad_precipitacion" onChange={(e)=>(setProbabilidad_precipitacion(e.target.value))}/>
                <button className="button" type="submit">Añadir</button>
            </form>
        </div>
    )

}