import '../style/TablaAdmin.css'

export default function TablaAdmin({ datos, setActual }) {

    return (
        <ul className="lugares-list-admin">
        {datos.map((dato) => {
            return (
                <li key={dato.dia} className="item">
                    
                    <button onClick={()=> setActual(dato)}>{new Date(dato.dia).toLocaleDateString()}</button>
                </li>
            )
        })}
        </ul>
    )
}
