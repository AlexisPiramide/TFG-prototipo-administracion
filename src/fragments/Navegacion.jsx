import { useNavigate } from "react-router-dom";
import '../style/Navegacion.css'
export default function Nav({usuario}) {
    const navigate = useNavigate();
    
    return ( 
        <nav>
            {usuario ? <h1>Bienvenido {usuario.nombre + (usuario.apellidos ? ',' + usuario.apellidos : '')}</h1> : ''}
            <ul>
                {!usuario ? <li><button onClick={() => {console.log('Log In clicked'); navigate('/login')}}>Log In</button></li> : ''}
                {!usuario ? <li><button onClick={() => {console.log('Registro clicked'); navigate('/registro')}}>Registro</button></li> : ''}
                {usuario ? <li><button onClick={() => {console.log('Examenes clicked'); navigate('/examenes')}}>Examenes</button></li> : ''}
            </ul>
        </nav>
     );
}