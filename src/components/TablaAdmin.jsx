import '../style/TablaAdmin.css'

export default function TablaAdmin({ datos, setActual }) {

    return (
        <ul className="lugares-list">
        {datos.map((dato) => {
            return (
                <li key={dato.dia} className="item">
                    <button>{new Date(dato.dia).toLocaleDateString()}</button>
                </li>
            )
        })}
        </ul>
    )
}
