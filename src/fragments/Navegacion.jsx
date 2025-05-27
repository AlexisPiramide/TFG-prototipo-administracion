import { useNavigate } from "react-router-dom";
import '../style/Navegacion.css'
import { useEffect } from "react";
export default function Nav({usuario,recarga, setRecarga}) {
    const navigate = useNavigate();


    return ( 
        <nav>
            {usuario ? <h1>Bienvenido {usuario.nombre + (usuario.apellidos ? ',' + usuario.apellidos : '')}</h1> : ''}
            <ul>
                {!usuario ? <li><button onClick={() => navigate('/login')}>Log In</button></li> : ''}
                {!usuario ? <li><button onClick={() => navigate('/registro')}>Registro</button></li> : ''}
                {usuario ? <li><button onClick={() => {setRecarga(!recarga); navigate('/examenes')}}>Examenes</button></li> : ''}
            </ul>
        </nav>
     );
}