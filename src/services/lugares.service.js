import URL from "./constante.js";

const getLugares = async(lugar) => {
    const data = await fetch(URL+"/api/lugares/"+lugar);
    const json = await data.json();
    return json;
}
  
export { getLugares};