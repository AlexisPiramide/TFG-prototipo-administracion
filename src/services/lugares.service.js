import URL from "./constante.js";

const getLugares = async () => {
    try {
        const data = await fetch(URL + "/api/lugares/");
        const json = await data.json();
        return json;
    } catch (error) {
        console.error("Connection rejected:", error);
        throw error;
    }

}

const añadirLugar = async (lugar) => {

    const municipio = lugar.municipio;
    const localidad = lugar.localidad;
    const codigo_postal = lugar.codigo_postal;

    try {
        const data = await fetch(URL + "/api/lugares/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({'municipio':municipio, 'localidad':localidad, 'codigo_postal':codigo_postal})
        });
        const json = await data.json();
        return json;
    } catch (error) {
        alert("Error al enviar formulario:", error);
    }
}

export { getLugares, añadirLugar };