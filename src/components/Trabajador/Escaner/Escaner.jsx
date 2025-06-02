import { useState } from "react";


export default function Escaner() {

       const [ultimoEscaneo, setUltimoEscaneo] = useState({
            paquete: {
                id: "ABCD1234EFGH567",
                dimensiones: "60x40x30",
                remitente: "Q7XZ-3B9L-PD4K",
                direccion_remitente: 1,
                destinatario: "M8CN-R2VF-JT5W",
                direccion_destinatario: 2,
                peso: 5.75,
                precio: 15.99,
                fecha_envio: new Date("2025-06-01T10:00:00Z"),
                fecha_entrega: new Date("2025-06-03T12:00:00Z")
            },
            trabajador: {
                id: "Q7XZ-3B9L-PD4K",
                nombre: "Alexis",
                apellidos: "Torres Climente",
                correo: "220240@fppiramide.com",
                contraseña: "",
                telefono: "639040769",
                puesto: "Gerente",
                sucursal: 1,
                es_externo: false,
                es_admin: true
            },
            fecha: new Date("2025-06-01T10:05:00Z"),
            estado: "En tránsito",
            direccion: {
                id: 2,
                calle: "Av. del Tenor Fleta 1",
                numero: "4C",
                codigo_postal: "50008",
                localidad: "Zaragoza",
                provincia: "Zaragoza",
                pais: "España",
                es_temporal: false
            }
        });
    

    return (
        <>
            <div className="div-escaner">
                <h2>Escáner de Código QR</h2>
                <p>Escanea un código QR para acceder a información específica.</p>
                <input type="file" accept="image/*" capture="environment" />
            </div>
            <div className="div-ultimo">
                <h2>Ultimo Escaneo</h2>
                <h3>Paquete: {ultimoEscaneo.paquete.id}</h3>
                <p><strong>Dimensiones:</strong> {ultimoEscaneo.paquete.dimensiones}</p>
                <p><strong>Remitente:</strong> {ultimoEscaneo.paquete.remitente} ({ultimoEscaneo.paquete.direccion_remitente})</p>
                <p><strong>Destinatario:</strong> {ultimoEscaneo.paquete.destinatario} ({ultimoEscaneo.paquete.direccion_destinatario})</p>
                <p><strong>Peso:</strong> {ultimoEscaneo.paquete.peso} kg</p>
            </div>
        </>
    )
}