import '../style/ExamenBoton.css';
import { getExamen, getRespuestas } from '../services/services.examenes';
import { useNavigate } from "react-router-dom";

export default function ExamenBoton({ examenDibujar, setExamen, usuario }) {
    const navigate = useNavigate();

    const abrirExamen = async (e) => {
        e.preventDefault();
       
        const examenFetch = await getExamen(e.target.id,usuario);
        setExamen(examenFetch)
        navigate("/examen");
    }

    const abrirRespuestas = async (e) => {
        e.preventDefault();

        const examenFetch = await getRespuestas(e.target.id,usuario);
        setExamen(examenFetch)
        navigate("/respuestas");
    }

    return (
        <div className={examenDibujar.fecha_fin ? 'acabado' : 'nuevo'}>
            <h1>Examen {examenDibujar.id}</h1>
            <h2>Fecha Creacion {new Date(examenDibujar.fecha_inicio).toLocaleString()}</h2>
            {examenDibujar.fecha_fin ? <h2>{new Date(examenDibujar.fecha_fin).toLocaleString()}</h2> : ''}
           
            {examenDibujar.fecha_fin ? <button id={examenDibujar.id} onClick={(e) => abrirRespuestas(e)}>Ver Respuestas</button> :  <button id={examenDibujar.id} onClick={(e) => abrirExamen(e)}>Ver examen</button>}
        </div>
    );
}