import { useState } from "react";
import "./../../../styles/componentesPublica/DatosPublicos.css";

export default function DatosPublicos({ datos = {}, setDatosCambiados }) {
    const datosDB = {
        telefono: "639040769",
        correo: "ejemplo@correo.com"
    };

    const [formData, setFormData] = useState({
        telefono: datos.telefono || datosDB.telefono,
        correo: datos.correo || datosDB.correo
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const nuevosDatos = { ...formData, [name]: value };
        setFormData(nuevosDatos);
        setDatosCambiados(nuevosDatos);
    };

    const formatTelefono = (value) => {
        const digits = value.replace(/\D/g, "");
        const parts = [];
        if (digits.length > 0) parts.push(digits.slice(0, 3));
        if (digits.length > 3) parts.push(digits.slice(3, 5));
        if (digits.length > 5) parts.push(digits.slice(5, 7));
        if (digits.length > 7) parts.push(digits.slice(7, 9));
        return parts.join(" ");
    };

    const handleTelefonoChange = (e) => {
        const raw = e.target.value.replace(/\D/g, "").slice(0, 9); // Max 9 digits
        const nuevosDatos = { ...formData, telefono: raw };
        setFormData(nuevosDatos);
        setDatosCambiados(nuevosDatos);
    };

    return (
        <div className="datos-publicos">
            <ul className="datos-publicos__lista">
                <li className="datos-publicos__item">
                    Teléfono de contacto: <input type="tel" className="datos-publicos__input" name="telefono" value={formatTelefono(formData.telefono)} onChange={handleTelefonoChange} />
                </li>
                <li className="datos-publicos__item">
                    Correo electrónico: <input type="email" className="datos-publicos__input" name="correo" value={formData.correo} onChange={handleChange} />
                </li>
            </ul>
        </div>
    );
}
