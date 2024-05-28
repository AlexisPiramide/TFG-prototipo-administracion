import { Outlet } from "react-router-dom";

import Nav from "./Nav";
import { useState } from "react";

export default function App() {

  const [usuario,setUsuario] = useState('');

  return (
    <>
      <Nav usuario={usuario} setUsuario={setUsuario}/>
      <Outlet context={[usuario, setUsuario]}/>
    </>
  );
}
