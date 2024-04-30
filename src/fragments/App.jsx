import { useContext, useEffect, useState } from 'react'
//import './App.css'
import { MainContext } from '../main'
import { getExamenes, getExamen } from '../services/services.examenes'
import Navegacion from './Navegacion'
import { Outlet } from 'react-router-dom'

function App() {

  const [usuario, setUsuario] = useState(null);
  const [error, setError]=useState(null)

  const [examenes, setExamenes] = useState([])
  const [examen, setExamen] = useState(null)

  useEffect(() => {
    console.log(usuario, 'usuario')
    recogeExamenes(usuario)
  }, [usuario])

  useEffect(()=>{
    console.log(examenes, 'examenes del set')
  },[examenes])

  const recogeExamenes = async () => {
    const result = await getExamenes(usuario)
    console.log(result, 'examenes')
    setExamenes(result)
  }


  return (
    <>
      <Navegacion usuario={usuario} />
      <Outlet context={[usuario,setUsuario,error,setError,examenes,setExamenes,examen,setExamen]}/>
    </>
  )
}

export default App
