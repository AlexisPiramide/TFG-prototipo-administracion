export default function AñadirLugar() {

    const [codigo_postal, setCodigo_postal] = useState(null)
    const [municipio, setMunicipio] = useState("")
    const [localidad, setLocalidad] = useState("")

    const AñadirLugar = async (e) => {
        
    };

    return (
        <div>
            <h1>Añadir Lugar</h1>
            <form onSubmit={(e)=>{AñadirLugar(e)}}>
                <label>Codigo Postal</label>
                <input type="text" name="nombre" onChange={(e)=>(setCodigo_postal(e.target.value))}/>
                <label>Municipio</label>
                <input type="text" name="municipio" onChange={(e)=>(setMunicipio(e.target.value))}/>
                <label>Localidad</label>
                <input type="text" name="imagen" onChange={(e)=>(setLocalidad(e.target.value))}/>
                <button type="submit">Añadir</button>
            </form>
        </div>
    )

}