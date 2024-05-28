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

export { getLugares };