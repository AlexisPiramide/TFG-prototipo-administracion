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

const postTiempo = async(tiempo) =>{

    const dia = tiempo.dia;
    const temperatura_maxima = tiempo.temperatura_maxima;
    const temperatura_minima = tiempo.temperatura_minima;
    const humedad_media = tiempo.humedad_media;
    const viento_maxima = tiempo.viento_maxima;
    const viento_minima = tiempo.viento_minima;
    const probabilidad_precipitacion = tiempo.probabilidad_precipitacion;
    const municipio = tiempo.municipio;
    const localidad = tiempo.localidad;
    const usuario = tiempo.usuario;

    try {
        const data = await fetch(URL + "/api/tiempo/nuevo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ dia, temperatura_maxima, temperatura_minima, humedad_media, viento_maxima, viento_minima, probabilidad_precipitacion, municipio, localidad, usuario }),
        });
        const json = await data.json();
        return json;
    } catch (error) {
        alert("Error al enviar formulario:", error);
    }


}

export { getTiempoLugar,postTiempo };