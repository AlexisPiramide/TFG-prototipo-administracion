
import { useEffect } from "react";
import "./../styles/navigationBar.css";
export default function NavigationBar({ opcion, setOpcion }) {

    const array = ["Zona Administrador","Administrador de Sucursal","Incidencias", "Configuración"];


    return (
        <>
            <nav>
                <div className="link-area">
                    <img src="/logo.svg" alt="Logo" className="logo" />
                    <span role="separator" aria-orientation="vertical" className="_separator_19gij_1">/</span>
                    <div className="div-selector">
                        <select className="selector" value={opcion} onChange={(e) => setOpcion(e.target.value)}>
                            {array.map(element => (
                                <option key={element} value={element}>{element}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="user-area">
                    <span className="user-icon">👤</span>
                    <span className="user-name">Usuario</span>
                </div>
            </nav>
        </>
    );
}
