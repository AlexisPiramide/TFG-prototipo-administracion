import URL from "./constante.js";

const getTiempoLugar = async (lugar) => {
    const municipio = lugar.municipio;
    const localidad = lugar.localidad;
    try {
        const data = await fetch(URL + "/api/tiempo/buscar",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ municipio, localidad }),
        });
        const json = await data.json();
        return json;

    } catch (error) {
        console.error("Connection rejected:", error);
        throw error;
    }

}

export { getTiempoLugar };