import { useState } from "react";
import { login } from "../services/usuarios.service";
import { useOutletContext } from "react-router-dom";

export default function Login() {
  const [alias, setAlias] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
  const [usuario,setUsuario] = useOutletContext();

  const doLogin = (e) => {
    e.preventDefault();

    const result = login(alias, password);

    if (result) {
      setUsuario(result);
      navigate("/");
    }
    
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={doLogin}>
        <input name="alias" type="text" placeholder="Alias" value={alias} onChange={(e) => { setAlias(e.target.value); }} />
        <input name="password" type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value); }} />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
