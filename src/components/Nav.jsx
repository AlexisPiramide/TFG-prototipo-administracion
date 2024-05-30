import { Link, useOutletContext } from "react-router-dom";
import "../style/Nav.css";

export default function Nav({ usuario, setUsuario}) {

  const cerrarsesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setUsuario(null);
  }

  return (
    (
      (usuario) ?
        <nav>
          <div>
            <Link to="/admin/">Menu</Link>
            <Link to="/login" onClick={() => cerrarsesion()}>Logout</Link>
          </div>
        </nav>
        :
        <nav>
          <div>
            <Link to="/">Menu</Link>
            <Link to="/login">Login</Link>
          </div>
        </nav>
    )
  );
}
