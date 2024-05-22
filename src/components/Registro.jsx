import { useState } from "react";
import { registro } from "../services/usuarios.service";
import { useOutletContext } from "react-router-dom";

export default function Registro() {
  const [alias, setAlias] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  
  const navigate = useNavigate();
  const [usuario,setUsuario] = useOutletContext();

  const emailpatern = '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$;'
  const passwordpatern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$'
  
  const doValidar = () => {
      if(!email.test(emailpatern)){
        return false;
      }
      if(!password.test(passwordpatern)){
        return false;
      }
      if(alias === "" || email === "" || password === "" || nombre === "" || apellidos === ""){
        return false;
      }
      else{
        return true;
      }
  }
  
  
  const doRegistro = (e) => {
    e.preventDefault();
    if (!doValidar()) {
      return;
    }
    else{
      const result = registro(alias,email, password,nombre,apellidos);
      
      if (result) {
        setUsuario(result);
        navigate("/");
      }
    }
  };

  return (
    <div>
      <form onSubmit={doRegistro}>
        <input type="text" placeholder="Alias" value={alias} onChange={(e) => {setAlias(e.target.value);}} />
        <input type="text" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value);}} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value);}} />
        <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => {setNombre(e.target.value);}} />
        <input type="text" placeholder="Apellidos" value={apellidos} onChange={(e) => {setApellidos(e.target.value);}} />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}
