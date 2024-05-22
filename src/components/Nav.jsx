import { Link } from "react-router-dom";
import "../style/Nav.css";
import { useEffect, useState } from "react";
import { getLugares } from "../services/lugares.service";
export default function Nav() {

  const [busqueda, setBusqueda] = useState("");
  const [lugares, setLugares] = useState([]);
  
  const buscar = () => {
    setLugares(getLugares(busqueda))
  }

  useEffect(() => {
    buscar()
  }, [busqueda])

  return (
    <nav>
      <div>
        <Link to="/">Menu</Link>
        <div>
          <input onChange={(e)=> (setBusqueda(e.target.value))} type="text" placeholder="Search" />
        </div>
        <Link to="/login">Login</Link>

        {lugares.length > 0 ? 
        <div>
          <ul>
            {lugares.map((lugar) => (
              <li key={lugar.id}>{lugar.nombre}</li>
            ))}
          </ul>
        </div>
        : <div></div>}
      </div>
    </nav>
  );
}
