import { useEffect, useState } from "react";
import { getLugares } from "../services/lugares.service";

import "../style/Buscador.css"
export default function Buscador({ setLocalizacion }) {


    const [busqueda, setBusqueda] = useState("");
    const [lugares, setLugares] = useState([]);
    const [lugaresFiltrados, setLugaresFiltrados] = useState([]);

    const filterLugares = () => {
        const lugaresFiltrados = lugares.filter((lugar) => {
            return (
                lugar.municipio.toLowerCase().includes(busqueda.toLowerCase()) ||
                lugar.localidad.toLowerCase().includes(busqueda.toLowerCase())
            );
        });

        const uniqueLugaresFiltrados = lugaresFiltrados.reduce((acc, current) => {
            const x = acc.find(item => item.codigo_postal === current.codigo_postal);
            if (!x) {
                return acc.concat([current]);
            } else {
                return acc;
            }
        }, []);

        setLugaresFiltrados(uniqueLugaresFiltrados);
    };


    const sacarLugares = async () => {
        const result = await getLugares();
        setLugares(result);
    }
    useEffect(() => {
        sacarLugares()
    }, []);

    useEffect(() => {
        filterLugares();
    }, [busqueda]);

    return (
        <div className="lugares-seleccion">
            <input onChange={(e) => (setBusqueda(e.target.value))} type="text" placeholder="Search" />
            {(busqueda.length <= 0) ? (lugares.length > 0 ?
                <ul className="lugares-list">
                    {lugares.map((lugar) => (
                        <li key={lugar.codigo_postal} className="lugar-item">
                            <button onClick={() => setLocalizacion(lugar)}>Municipio: {lugar.municipio} | Localidad: {lugar.localidad}</button>
                        </li>
                    ))}
                </ul>
                : "")
                : <ul className="lugares-list">
                    {lugaresFiltrados.map((lugar) => (
                        <li key={lugar.codigo_postal} className="lugar-item">
                            <button onClick={() => setLocalizacion(lugar)}>Municipio: {lugar.municipio} | Localidad: {lugar.localidad}</button>
                        </li>
                    ))}
                </ul>
            }
        </div>
    );




}