import { useState } from "react";
import "./../../../styles/componentes/Publica/DireccionPublica.css";

export default function DireccionPublica({ datos, setDatosCambiados }) {

    const datosDB = {
        direccion: "Calle Pruebas 512",
        ciudad: "Huesca",
        codigoPostal: "22001"
    };

    const [formData, setFormData] = useState({
        direccion: datos?.direccion || datosDB.direccion,
        ciudad: datos?.ciudad || datosDB.ciudad,
        codigoPostal: datos?.codigoPostal || datosDB.codigoPostal
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const nuevosDatos = { ...formData, [name]: value };
        setFormData(nuevosDatos);
        setDatosCambiados(nuevosDatos);
    };

    return (

        <ul className="direccion-publica__lista">
            <li className="direccion-publica__item">
                Dirección: <input type="text" className="direccion-publica__input" name="direccion" value={formData.direccion} onChange={handleChange} />
            </li>
            <li className="direccion-publica__item">
                Ciudad: <input type="text" className="direccion-publica__input" name="ciudad" value={formData.ciudad} onChange={handleChange} />
            </li>
            <li className="direccion-publica__item">
                Código Postal: <input type="text" className="direccion-publica__input" name="codigoPostal" value={formData.codigoPostal} onChange={handleChange} />
            </li>
        </ul>
    );
}
