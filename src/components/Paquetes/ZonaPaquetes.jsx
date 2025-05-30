import { useEffect, useState } from "react";
import "./../../styles/componentes/Paquetes/ZonaPaquetes.css";

export default function ZonaPaquetes() {
    const [selectedTipo, setSelectedTipo] = useState("Todos");


    const paquetes = [
        { id: "a7YpQ93bVmLx2ZD", estado: "Entrega" },
        { id: "Wn4bqYZ32CdXtP1", estado: "Creado" },
        { id: "eKjT2n68vXwMC5A", estado: "Transito" },
        { id: "pR3XyFaL72bVqTZ", estado: "Creado" },
        { id: "Xc9aLMt0ZrQ1Nef", estado: "Transito" },
        { id: "U7kNqJd5fZx82Bw", estado: "Entrega" },
        { id: "mEz0TRPg1XbQdKn", estado: "Entrega" },
        { id: "fYz78PWxCr1vaqN", estado: "Transito" },
        { id: "Znt93BQLy2fvEXA", estado: "Creado" },
        { id: "xb41zEvRcQN9KaM", estado: "Entrega" },
        { id: "AFvRp63WbZzMnaQ", estado: "Transito" },
        { id: "Q3xkj0vMFcTARpY", estado: "Creado" },
        { id: "vRPxzAJYbnEcq52", estado: "Creado" },
        { id: "B5yXNwT1Qz6a0rm", estado: "Entrega" },
        { id: "NztPAvRKW7yb9oM", estado: "Transito" },
        { id: "eWyrBMZFn4q9vTX", estado: "Transito" },
        { id: "kwv0MNgRxLt1YEb", estado: "Creado" },
        { id: "ZLyRtEpJ3Xov7nC", estado: "Entrega" },
        { id: "MnA70WxkJZ2CpFb", estado: "Creado" },
        { id: "gXbNqL45yTcMwEV", estado: "Entrega" },
        { id: "KqzFnYBtRv2Mej3", estado: "Creado" },
        { id: "dEzNXYJq81vWmZo", estado: "Transito" },
        { id: "WmTPnVbfk03AzLi", estado: "Transito" },
        { id: "nRa0J8F6YwXLmvg", estado: "Entrega" },
        { id: "bpKVEQL7t3nXmjY", estado: "Transito" },
        { id: "ZxgMEvQF1B7naoK", estado: "Creado" },
        { id: "wTn43LMJazvKxe1", estado: "Entrega" },
        { id: "YAfKXjvMRg03wbL", estado: "Transito" },
        { id: "LmTRKzqN78xBoPj", estado: "Creado" },
        { id: "qN7Yk03vTZLmFEx", estado: "Entrega" }
    ];


    useEffect(() => {
        console.log("Filtrando por tipo:", selectedTipo);
    }, [selectedTipo]);

    const handleRadioChange = (e) => {
        setSelectedTipo(e.target.value);
    };

    const handleLimpiar = () => {
        setSelectedTipo("Todos");
    };

    return (
        <>
            <div className="filtros-paquetes">
                <label>
                    <input type="radio" name="tipoPaquete" value="Todos" checked={selectedTipo === "Todos"} onChange={handleRadioChange} />
                    Todos
                </label>
                <label>
                    <input type="radio" name="tipoPaquete" value="Creado" checked={selectedTipo === "Creado"} onChange={handleRadioChange} />
                    Creado
                </label>
                <label>
                    <input type="radio" name="tipoPaquete" value="Transito" checked={selectedTipo === "Transito"} onChange={handleRadioChange} />
                    Transito
                </label>
                <label>
                    <input type="radio" name="tipoPaquete" value="Entrega" checked={selectedTipo === "Entrega"} onChange={handleRadioChange} />
                    Entrega
                </label>
                <button onClick={() => console.log("Filtrando por tipo:", selectedTipo)}>Filtrar</button>
                <button onClick={handleLimpiar}>Limpiar</button>
            </div>
            <div className="paquetes-lista">
                {paquetes
                    .filter(paquete => selectedTipo === "Todos" || paquete.estado === selectedTipo)
                    .map(paquete => (
                        <div key={paquete.id} className="paquete-item">
                            <p>ID: {paquete.id}</p>
                            <p>Estado: {paquete.estado}</p>
                        </div>
                    ))
                }
            </div>
        </>
    );
}
