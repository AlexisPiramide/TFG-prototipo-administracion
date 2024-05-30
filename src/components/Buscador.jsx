import { useEffect, useState } from "react";
import { getLugares } from "../services/lugares.service";

import "../style/Buscador.css"

export default function Buscador({ setLocalizacion }) {

    const [busqueda, setBusqueda] = useState("");
    const [lugares, setLugares] = useState([]);
    const [lugaresFiltrados, setLugaresFiltrados] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

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
        sacarLugares();
    }, []);

    useEffect(() => {
        filterLugares();
        setCurrentPage(1); // Reset to page 1 on new search
    }, [busqueda]);

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = (busqueda.length <= 0 ? lugares : lugaresFiltrados).slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalItems = busqueda.length <= 0 ? lugares.length : lugaresFiltrados.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
        <div className="lugares-seleccion">
            <input onChange={(e) => setBusqueda(e.target.value)} type="text" placeholder="Search" />
            {totalItems > 0 &&
                <ul className="lugares-list">
                    {currentItems.map((lugar) => (
                        <li key={lugar.codigo_postal} className="lugar-item">
                            <button onClick={() => setLocalizacion(lugar)}>Municipio: {lugar.municipio} | Localidad: {lugar.localidad}</button>
                        </li>
                    ))}
                </ul>
            }
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button key={i + 1} onClick={() => paginate(i + 1)} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}
