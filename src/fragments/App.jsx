import { useContext, useEffect, useState } from 'react'
//import './App.css'
import { MainContext } from '../main'
import { getExamenes, getExamen } from '../services/services.examenes'
import Navegacion from './Navegacion'
import { Outlet } from 'react-router-dom'

function App() {

  const [usuario, setUsuario] = useState(null);
  const [recarga, setRecarga] = useState(false)

  const [examenes, setExamenes] = useState([])
  const [examen, setExamen] = useState(null)

  useEffect(() => {
    if (usuario) {
      recogeExamenes(usuario)
    }
  }, [usuario, recarga])

  const recogeExamenes = async () => {
    const result = await getExamenes(usuario)
    setExamenes(result)
  }


  return (
    <>
      <Navegacion usuario={usuario} recarga={recarga} setRecarga={setRecarga} />
      <Outlet context={[usuario, setUsuario, examenes, setExamenes, examen, setExamen, recarga, setRecarga]} />
    </>
  )
}

export default App
