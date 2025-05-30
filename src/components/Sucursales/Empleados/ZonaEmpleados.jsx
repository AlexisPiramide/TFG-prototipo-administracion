import { useState, useEffect } from 'react';
import ModificarEmpleado from './ModificarEmpleado';

import "./../../../styles/componentes/Empleados/ZonaEmpleados.css";

export default function ZonaEmpleados() {

    const lista = [
        { id: "Z7K2-RM83-9A1L", nombre: "Ana", apellidos: "García López", email: "ana.garcia@empresa.com", telefono: "612345678", puesto: "Repartidor", img: "https://placehold.co/600x600"},
        { id: "PQ4X-5L9A-KM1Z", nombre: "Luis", apellidos: "Martínez Pérez", email: "luis.martinez@empresa.com", telefono: "634567890", puesto: "Almacen" , img: "https://placehold.co/600x600" },
        { id: "NX2D-1RA7-ZK5C", nombre: "María", apellidos: "Rodríguez Sánchez", email: "maria.rodriguez@empresa.com", telefono: "622334455", puesto: "Logistica" , img: "https://placehold.co/600x600" },
        { id: "W3QF-80BJ-T4NZ", nombre: "Carlos", apellidos: "Fernández Ruiz", email: "carlos.fernandez@empresa.com", telefono: "633445566", puesto: "Administracion" , img: "https://placehold.co/600x600" },
        { id: "AY9T-M72F-91QX", nombre: "Elena", apellidos: "Díaz Gómez", email: "elena.diaz@empresa.com", telefono: "611223344", puesto: "Repartidor" , img: "https://placehold.co/600x600" },
        { id: "B8KW-N5Z0-24HR", nombre: "Javier", apellidos: "Santos Ortega", email: "javier.santos@empresa.com", telefono: "699887766", puesto: "Logistica" , img: "https://placehold.co/600x600" },
        { id: "HV93-TN2A-63JD", nombre: "Lucía", apellidos: "Moreno Torres", email: "lucia.moreno@empresa.com", telefono: "688998877", puesto: "Almacen" , img: "https://placehold.co/600x600" },
        { id: "C1L0-UX48-WR2V", nombre: "Miguel", apellidos: "Ramírez Castro", email: "miguel.ramirez@empresa.com", telefono: "677889900", puesto: "Repartidor" , img: "https://placehold.co/600x600" },
        { id: "RX2Y-M0J6-QA9E", nombre: "Sara", apellidos: "Vega Ramos", email: "sara.vega@empresa.com", telefono: "655443322", puesto: "Logistica" , img: "https://placehold.co/600x600" },
        { id: "L4NC-VR83-ZKX5", nombre: "David", apellidos: "Navarro Molina", email: "david.navarro@empresa.com", telefono: "644556677", puesto: "Administracion" , img: "https://placehold.co/600x600" },
        { id: "TMK5-0UR8-QW7L", nombre: "Paula", apellidos: "Jiménez Herrera", email: "paula.jimenez@empresa.com", telefono: "600112233", puesto: "Almacen" , img: "https://placehold.co/600x600" },
        { id: "Y31F-NX29-0CVQ", nombre: "Alberto", apellidos: "Ruiz Romero", email: "alberto.ruiz@empresa.com", telefono: "699000111", puesto: "Repartidor" , img: "https://placehold.co/600x600" },
        { id: "F8UA-L3JZ-KZ90", nombre: "Carmen", apellidos: "Serrano Gil", email: "carmen.serrano@empresa.com", telefono: "612345000", puesto: "Logistica" , img: "https://placehold.co/600x600" },
        { id: "MVXP-09KY-QLRU", nombre: "Raúl", apellidos: "Gutiérrez León", email: "raul.gutierrez@empresa.com", telefono: "634221100", puesto: "Almacen" , img: "https://placehold.co/600x600" },
        { id: "JP9E-MK8X-RW71", nombre: "Patricia", apellidos: "Iglesias Cruz", email: "patricia.iglesias@empresa.com", telefono: "677334455", puesto: "Repartidor" , img: "https://placehold.co/600x600" },
        { id: "KZ41-JVMN-X5E3", nombre: "Sergio", apellidos: "López Vargas", email: "sergio.lopez@empresa.com", telefono: "688334422", puesto: "Logistica" , img: "https://placehold.co/600x600" },
        { id: "RD67-QA3X-TF90", nombre: "Marta", apellidos: "Ortega Flores", email: "marta.ortega@empresa.com", telefono: "611009988", puesto: "Administracion" , img: "https://placehold.co/600x600" },
        { id: "T82K-Z4CJ-MWX1", nombre: "Andrés", apellidos: "Castro Peña", email: "andres.castro@empresa.com", telefono: "600776655", puesto: "Almacen" , img: "https://placehold.co/600x600" },
        { id: "U3EN-XP92-KVZ8", nombre: "Beatriz", apellidos: "Molina Ruiz", email: "beatriz.molina@empresa.com", telefono: "633221144", puesto: "Repartidor" , img: "https://placehold.co/600x600" },
        { id: "GZ58-RY2K-L1MJ", nombre: "Fernando", apellidos: "Suárez Ramos", email: "fernando.suarez@empresa.com", telefono: "644110099", puesto: "Admin", img: "https://placehold.co/600x600" }
    ];

    const [empleados, setEmpleados] = useState(lista);
    const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState(null);

    useEffect(() => {
        console.log("Cargando empleados...");
    }, []);

    return (
        <>
            <div className="empleados-lista">
                {empleados && empleados.map(empleado => (
                    <button key={empleado.id} className={`empleado-item${empleadoSeleccionado && empleado.id === empleadoSeleccionado.id ? " seleccionado" : ""}`} onClick={() => setEmpleadoSeleccionado(empleado)}>
                        {empleado.nombre}, {empleado.apellidos}
                    </button>
                ))}
            </div>
            <div className="empleado-detalles">
                <ModificarEmpleado empleado={empleadoSeleccionado} />
            </div>
        </>
    );
}