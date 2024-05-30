import { useState } from "react";
import { añadirLugar } from "../services/lugares.service";
import { useNavigate } from "react-router-dom";
import "../style/AñadirLugar.css";

export default function AñadirLugar() {
    const [codigo_postal, setCodigo_postal] = useState(null);
    const [municipio, setMunicipio] = useState("");
    const [localidad, setLocalidad] = useState("");
    const navigate = useNavigate();

    const enviarFormulario = async (e) => {
        e.preventDefault();

        const lugar = {
            codigo_postal: codigo_postal,
            municipio: municipio,
            localidad: localidad,
        };

        const result = await añadirLugar(lugar);

        if (result) {
            navigate("/menu");
        }
    };

    return (
        <div className="añadir-lugar">
            <h1>Añadir Lugar</h1>
            <form onSubmit={(e) => enviarFormulario(e)}>
                <label className="label">Codigo Postal</label>
                <input
                    className="input"
                    type="text"
                    name="nombre"
                    onChange={(e) => setCodigo_postal(e.target.value)}
                />
                <label className="label">Municipio</label>
                <input
                    className="input"
                    type="text"
                    name="municipio"
                    onChange={(e) => setMunicipio(e.target.value)}
                />
                <label className="label">Localidad</label>
                <input
                    className="input"
                    type="text"
                    name="imagen"
                    onChange={(e) => setLocalidad(e.target.value)}
                />
                <button className="button" type="submit">
                    Añadir
                </button>
            </form>
        </div>
    );
}