import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { updateTiempo, getTiempoLugar } from "../services/tiempo.service";
import TablaAdmin from "./TablaAdmin";

import "../style/ModificarDatos.css";

export default function ModificarDatos({ localizacion }) {
    const [usuario, setUsuario] = useOutletContext();
    const [dia, setDia] = useState("");
    const [temperatura_maxima, setTemperatura_maxima] = useState("");
    const [temperatura_minima, setTemperatura_minima] = useState("");
    const [humedad_media, setHumedad_media] = useState("");
    const [viento_maxima, setViento_maxima] = useState("");
    const [viento_minima, setViento_minima] = useState("");
    const [probabilidad_precipitacion, setProbabilidad_precipitacion] = useState("");
    const [actual, setActual] = useState(null);
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        if (localizacion === "") {
            return;
        }
        const fetchData = async () => {
            const result = await getTiempo();
            setDatos(result);
        };
        fetchData();
    }, [localizacion]);

    const getTiempo = async () => {
        const result = await getTiempoLugar(localizacion);
        return result;
    };

    useEffect(() => {
        if (actual) {
            setDia(actual.dia ? actual.dia.split("T")[0] : "");
            setTemperatura_maxima(actual.temperatura_maxima || "");
            setTemperatura_minima(actual.temperatura_minima || "");
            setHumedad_media(actual.humedad_media || "");
            setViento_maxima(actual.viento_maxima || "");
            setViento_minima(actual.viento_minima || "");
            setProbabilidad_precipitacion(actual.probabilidad_precipitacion || "");
        }
    }, [actual]);

    const enviarFormulario = async (e) => {
        e.preventDefault();
        const lugar = {
            dia,
            temperatura_maxima,
            temperatura_minima,
            humedad_media,
            viento_maxima,
            viento_minima,
            probabilidad_precipitacion,
        };
        await updateTiempo(lugar);
        
    };

    return (
        <div className="modificar-datos">
            <h1>Modificar Datos</h1>

            {datos.length > 0 ? <TablaAdmin datos={datos} setActual={setActual} /> : ''}

            <form onSubmit={(e) => enviarFormulario(e)}>
                <label className="label">Dia</label>
                <input
                    className="input"
                    type="date"
                    name="dia"
                    value={dia}
                    onChange={(e) => setDia(e.target.value)}
                    disabled
                />
                <label className="label">Temperatura Máxima</label>
                <input
                    className="input"
                    type="number"
                    name="temperatura_maxima"
                    value={temperatura_maxima}
                    onChange={(e) => setTemperatura_maxima(e.target.value)}
                />
                <label className="label">Temperatura Mínima</label>
                <input
                    className="input"
                    type="number"
                    name="temperatura_minima"
                    value={temperatura_minima}
                    onChange={(e) => setTemperatura_minima(e.target.value)}
                />
                <label className="label">Humedad Media</label>
                <input
                    className="input"
                    type="number"
                    name="humedad_media"
                    value={humedad_media}
                    onChange={(e) => setHumedad_media(e.target.value)}
                />
                <label className="label">Viento Máxima</label>
                <input
                    className="input"
                    type="number"
                    name="viento_maxima"
                    value={viento_maxima}
                    onChange={(e) => setViento_maxima(e.target.value)}
                />
                <label className="label">Viento Mínima</label>
                <input
                    className="input"
                    type="number"
                    name="viento_minima"
                    value={viento_minima}
                    onChange={(e) => setViento_minima(e.target.value)}
                />
                <label className="label">Probabilidad de Precipitación</label>
                <input
                    className="input"
                    type="number"
                    name="probabilidad_precipitacion"
                    value={probabilidad_precipitacion}
                    onChange={(e) => setProbabilidad_precipitacion(e.target.value)}
                />
                <button className="button" type="submit" >Añadir</button>
            </form>
        </div>
    );
}
