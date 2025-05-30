

import React, { useState, useEffect } from "react";
import ImageUploader from "./ImageUploader";

export default function ModificarEmpleado({ empleado }) {
    const [form, setForm] = useState({
        nombre: "",
        apellidos: "",
        email: "",
        telefono: "",
        puesto: "",
        img: ""
    });


    useEffect(() => {
        if (empleado) {
            setForm({
                nombre: empleado.nombre || "",
                apellidos: empleado.apellidos || "",
                email: empleado.email || "",
                telefono: empleado.telefono || "",
                puesto: empleado.puesto || "",
                img: empleado.img || ""
            });
        }
    }, [empleado]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <>
            <h3>{empleado ? empleado.id : "No empleado seleccionado"}</h3>
            {empleado ? (
                <>

                    <form className="empleado-detalles">
                        <ImageUploader image={form.img} onImageChange={(newImageUrl) =>  setForm((prev) => ({ ...prev, img: newImageUrl })) } />

                        <div className="empleado-info">
                            <label>Nombre:</label>
                            <input type="text" name="nombre" value={form.nombre} onChange={handleChange} />
                            <label>Apellidos:</label>
                            <input type="text" name="apellidos" value={form.apellidos} onChange={handleChange} />
                            <label>Email:</label>
                            <input type="email" name="email" value={form.email} onChange={handleChange} />
                            <label>Teléfono:</label>
                            <input type="tel" name="telefono" value={form.telefono} onChange={handleChange} />
                            <label>Puesto:</label>
                            <select name="puesto" value={form.puesto} onChange={handleChange}>
                                <option value="Repartidor">Repartidor</option>
                                <option value="Almacen">Almacen</option>
                                <option value="Logistica">Logistica</option>
                                <option value="Administracion" disabled>Administracion</option>
                            </select>
                        </div>
                    </form>
                    <button className="guardar-cambios" onClick={() => console.log("Guardar cambios", form)}> Guardar Cambios </button>
                </>
            ) : (
                <p>Selecciona un empleado para ver sus detalles.</p>
            )}
        </>
    );
}