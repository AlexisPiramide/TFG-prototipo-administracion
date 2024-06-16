import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useWindowSize } from 'react-use';
import '../styles/Nav.css';
import logo from '../../public/user.png';

export default function Nav() {
  const { width, height } = useWindowSize();
  const [windowstate, setWindowstate] = useState(false);


  useEffect(() => {
    if (width < 960) {
      setWindowstate(true);
    } else {
      setWindowstate(false);
    }
  }, [width]);
  return (
    <nav>
      {windowstate ?
        <div className="zona-usuario-reducizo">
          <button className="btn-dropdown">
            <img src={logo} alt="logo"/>
          </button>
          <div className="dropdown">
            <Link href="/registro">Crear una cuenta</Link>
            <Link href="/login">Acceder</Link>
          </div>
        </div>
        :
        <div className="zona-usuario">
          <Link href="/registro">Crear una cuenta</Link>
          <Link href="/login">Acceder</Link>
        </div>
      }
    </nav>
  );
}
