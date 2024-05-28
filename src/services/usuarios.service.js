import URL from "./constante.js";

const login = async (email, password) => {
  try {
    const data = await fetch(URL + "/api/usuario/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await data.json();
    localStorage.setItem("token", json.token);
    localStorage.setItem("alias", json.alias);
    return json;
  } catch (error) {
    alert("Usuario o contraseña incorrectos")
  }
};

const registro = async (alias, email, password, nombre, apellidos) => {
  try {
    const data = await fetch(URL + "/api/usuario/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ alias, email, password, nombre, apellidos }),
    });
    const json = await data.json();
    localStorage.setItem("token", json.token);
    localStorage.setItem("alias", json.alias);
    return json;
  } catch (error) {
    alert("Error al registrarse")
    console.error("Error occurred during registration:", error);
  }
}


const compruebaToken = async () => {
  const token = localStorage.getItem("token");
  try {
    const data = await fetch(URL + "/api/usuario/compruebaToken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await data.json();
    return json;
  }
  catch (error) {
    console.error("Error occurred during token verification:", error);
  }
}


export { login, registro, compruebaToken };
