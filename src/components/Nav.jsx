import { Link } from "react-router-dom";
import "../style/Nav.css";

export default function Nav() {

  return (
    <nav>
      <div>
        <Link to="/menu">Menu</Link>
        <Link to="/login">Login</Link>

      </div>
    </nav>
  );
}
