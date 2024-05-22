const login = async (email, password) => {
  try {
    const data = await fetch("http://localhost:8080/api/usuarios/login", {
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

const registro = async (alias,email, password,nombre,apellidos) => {
  try {
    const data = await fetch("http://localhost:8080/api/usuarios/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ alias,email, password,nombre,apellidos }),
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

export { login, registro};
