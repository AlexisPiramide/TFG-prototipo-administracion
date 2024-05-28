import { useEffect, useState } from "react";
import Buscador from "./Buscador";
import { getTiempoLugar } from "../services/tiempo.service";
import TablaDatos from "./TablaDatos";
import "../style/Menu.css";
export default function Menu() {
    const [localizacion, setLocalizacion] = useState("");
    const [datos, setDatos] = useState([]);
    const [visible, setVisible] = useState(true);

    const ocultar = () => {
        setVisible(!visible);
    };

    const getTiempo = async () => {
        const result = await getTiempoLugar(localizacion);
        return result;
    };

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

    return (
        <div className="menu">
            <h1>Menu</h1>
            <button className="ocultar" onClick={ocultar}>{visible ? "Ocultar Buscador" : "Mostrar Buscador"}</button>
            {visible && <Buscador setLocalizacion={setLocalizacion} />}
            {datos.length > 0 && <TablaDatos datos={datos} />}
        </div>
    );
}
