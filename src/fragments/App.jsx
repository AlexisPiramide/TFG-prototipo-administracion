import { useContext, useEffect, useState } from 'react'
//import './App.css'
import { MainContext } from '../main'
import { getExamenes, getExamen } from '../services/services.examenes'
import Navegacion from './Navegacion'
import { Outlet } from 'react-router-dom'

function App() {

  const context = useContext(MainContext);
  const [usuario, setUsuario] = useState(context.usuario)

  useEffect(() => {
    recogeExamenes(usuario)
  }, [usuario])

  const recogeExamenes = async () => {
    const result = await getExamenes(usuario)
    setExamenes(result)
  }


  return (
    <>
      <Navegacion usuario={usuario} />
      <Outlet />
    </>
  )
}

export default App
