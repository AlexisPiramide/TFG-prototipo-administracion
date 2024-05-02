import React from 'react'
import {nuevoExamen} from '../services/services.examenes'
import { useOutletContext } from 'react-router-dom';

import { useNavigate } from "react-router-dom";

export default function BotonNuevoExamen() {

    const navigate = useNavigate();
    const [usuario] = useOutletContext();

    const crearExamen = async () => {
        const result = await nuevoExamen(usuario);
        if (result) {
            navigate("/examenes");
        }
    }

    return (
        <div>
            <button onClick={()=>crearExamen()}>Nuevo Examen</button>
        </div>
    )
}