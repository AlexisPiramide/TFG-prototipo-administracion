import { useOutletContext } from "react-router-dom";

import ExamenBoton from "./ExamenBoton"
export default function ListaExamenes() {

    const [usuario,setUsuario] = useOutletContext();
    const [,,examenes] = useOutletContext();
    const [,,,,, setExamen] = useOutletContext();
    const [,,,,, , setRecarga] = useOutletContext();
    

    return (
        <>
            {examenes.map((examenDibujar, index) => (
                <ExamenBoton key={index} examenDibujar={examenDibujar} setExamen={setExamen} usuario={usuario} />
            ))}
        </>
    )

}
