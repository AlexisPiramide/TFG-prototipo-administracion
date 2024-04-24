import { useEffect, useState } from 'react'
//import './App.css'
import Pregunta from './Pregunta'
import ExamenBoton from './ExamenBoton'
import { getExamenes, getExamen } from './services/services.examenes'
import LogIn from './LogIn'
import Examen from './Examen'

function App() {

  const [examenes, setExamenes] = useState([])
  const [examen, setExamen] = useState()
  
  useEffect(() => {
    recogeExamenes(usuario)
  }, [usuario])

  const recogeExamenes = async () => {
    const result = await getExamenes(usuario)
    setExamenes(result)
  }


  return (
    <>
      <h1>{usuario ? usuario.token : '' }</h1>
      {usuario ?  <ListaExamenes usuario={usuario} examenes={examenes} setExamen={setExamen} /> : (error ? <LogIn setError={setError} error={error} setUsuario={setUsuario}/> : <LogIn setError={setError} setUsuario={setUsuario}/>)}
       <Examen examen={examen}/>
    </>
   
  )
}

export default App
