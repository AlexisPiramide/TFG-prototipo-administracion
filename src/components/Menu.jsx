import { useState } from 'react'
import '../style/Menu.css'
import TablaDatos from './TablaDatos'

export default function Menu (){
    const [datos, setDatos] = useState({
        dia: '2022-10-01',
        temperaturaMaxima: '25°C',
        temperaturaMinima: '15°C',
        humedadMedia: '60%',
        vientoMaxima: '20 km/h',
        vientoMinima: '5 km/h',
        probabilidadPrecipitacion: '30%',
        municipio: 'Madrid',
        localidad: 'Centro'
    });

    return (
        <>
            <div id="app">
                <div id="cloud-container">
                    <div id="cloud-pattern"></div>
                    <div id="cloud-gradient-overlay"></div>
                    <TablaDatos  datos={datos}/>
                </div>
            </div>
        </>
    )
}