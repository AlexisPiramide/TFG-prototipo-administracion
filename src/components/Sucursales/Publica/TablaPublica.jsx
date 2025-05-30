import { useState } from "react";
import "./../../../styles/componentes/Publica/TablaPublica.css";

export default function TablaPublica({ datos, setDatosCambiados }) {
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

   
    const horarioEjemplo = [
        { dia: 0, apertura: "08:00", cierre: "18:00" },
        { dia: 1, apertura: "08:00", cierre: "18:00" },
        { dia: 2, apertura: "08:00", cierre: "18:00" },
        { dia: 3, apertura: "08:00", cierre: "18:00" },
        { dia: 4, apertura: "08:00", cierre: "18:00" },
        { dia: 5, apertura: "09:00", cierre: "16:00" },
        { dia: 6, apertura: "10:00", cierre: "14:00" }
    ];

    const [horarios, setHorarios] = useState(datos || horarioEjemplo);


    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const nuevosHorarios = [...horarios];

        nuevosHorarios[index] = {
            ...nuevosHorarios[index],
            [name]: value
        };

        setHorarios(nuevosHorarios);
        setDatosCambiados(nuevosHorarios);
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Día</th>
                    <th>Apertura</th>
                    <th>Cierre</th>
                </tr>
            </thead>
            <tbody>
                {horarios.map((horario, index) => (
                    <tr key={index}>
                        <td>{dias[horario.dia]}</td>
                        <td>
                            <input
                                name="apertura"
                                value={horario.apertura}
                                onChange={e => handleChange(e, index)}
                            />
                        </td>
                        <td>
                            <input
                                name="cierre"
                                value={horario.cierre}
                                onChange={e => handleChange(e, index)}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
