import { useEffect, useState } from "react";
import Buscador from "./Buscador";
import "../style/MenuAdmin.css";
import { useNavigate, useOutletContext } from "react-router-dom";
import AñadirLugar from "./AñadirLugar";
import AñadirDatos from "./AñadirDatos";
import ModificarDatos from "./ModificarDatos";

export default function MenuAdmin() {
    const navigate = useNavigate();

    const [usuario, setUsuario] = useOutletContext();
    const [localizacion, setLocalizacion] = useState({ municipio: "", localidad: "" });
    const [visible, setVisible] = useState(true);
    const [modificar, setModificar] = useState(false);

    /*
    const IsAdmin = () => {
        if (!usuario) {
            const token = localStorage.getItem("token");
            const email = localStorage.getItem("email");
            if (token && email) {
                setUsuario({ token, email });
            } else {
                Navigate("/login");
            }
        }
    };
    */

    useEffect(() => {
        if (!usuario) {
            const token = localStorage.getItem("token");
            const email = localStorage.getItem("email");
            if (token && email) {
                setUsuario({ token, email });
            } else {
                navigate("/login");
            }
        }  
    }, []);


    const ocultar = () => {
        setVisible(!visible);
    };

    const limpiarLocalizacion = () => {
        setLocalizacion({ municipio: "", localidad: "" });
        setModificar(false);
    };

    return (
        <div className="menu">
            <h1>Zona Admin</h1>
            <button className="ocultar" onClick={ocultar}>{visible ? "Ocultar Buscador" : "Mostrar Buscador"}</button>
            {visible && <Buscador setLocalizacion={setLocalizacion} />}
            {localizacion.municipio ? <button className="button-admin" onClick={limpiarLocalizacion}>Limpiar Localizacion</button> : ''}


            {localizacion.municipio && (
                <>
                    <button className="button-admin" onClick={() => setModificar(!modificar)}>
                        {!modificar ? "Cambiar a Añadir Datos" : "Cambiar a Modificar Datos"}
                    </button>
                    {modificar ? (
                        <div>
                            <h3 style={{ textAlign: "center" }}>Actulamente usted esta añadiendo datos al lugar: {localizacion.municipio}, {localizacion.localidad}</h3>
                            <AñadirDatos municipio={localizacion.municipio} localidad={localizacion.localidad} />
                        </div>
                    ) : (
                        <div>
                            <h3 style={{ textAlign: "center" }}>Actulamente usted esta modificando el lugar: {localizacion.municipio}, {localizacion.localidad}</h3>
                            <ModificarDatos localizacion={localizacion} />
                        </div>
                    )}
                </>
            )}
            {(!localizacion.municipio) ? <AñadirLugar /> : ''}
        </div>
    );
}
