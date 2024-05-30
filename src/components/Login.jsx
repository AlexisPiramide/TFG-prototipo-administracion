import { useState, useEffect } from "react";
import { login } from "../services/usuarios.service";
import { useNavigate, useOutletContext } from "react-router-dom";
import '../style/Login.css';

import { Navigate } from "react-router-dom";
export default function Login() {
  const [alias, setAlias] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [usuario, setUsuario] = useOutletContext();


  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  const IsAdmin = () => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    if (token && email) {
      setUsuario({ token, email });
      navigate("/admin");
    }
  };

  useEffect(() => {
    IsAdmin();
  }, []);

  const doLogin = (e) => {
    e.preventDefault();

    const result = login(alias, password);

    if (result) {
      setUsuario(result);
      navigate("/admin");
    }

  };

  return (
    <div id='login-div'>
      <h1>Login</h1>
      <form id='login' onSubmit={doLogin}>
        <input name="alias" type="text" placeholder="Alias" value={alias} onChange={(e) => { setAlias(e.target.value); }} />
        <input name="password" type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value); }} />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
