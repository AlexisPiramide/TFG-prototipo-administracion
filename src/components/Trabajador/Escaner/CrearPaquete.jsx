import "./../../../styles/componentes/Empleados/Formulario.css";

export default function CrearPaquete() {



    return (
        <div className="div-crear-paquete">
            <form className="form-destinatario">
                <h2>Destinatario</h2>
                <label>Nombre*</label>
                <input required type="text" name="nombre" />
                <label>Apellidos*</label>
                <input required type="text" name="apellidos" />
                <div className="correo-hover-container">
                    <label>Correo*</label>
                    <input type="email" name="correo" />
                    <label>Teléfono</label>
                    <input required type="text" name="telefono" />
                </div>
            </form>
            <form className="form-remitente">
                <h2>Remitente</h2>
                <label>Nombre*</label>
                <input required type="text" name="nombre" />
                <label>Apellidos*</label>
                <input required type="text" name="apellidos" />
                <div className="correo-hover-container">
                    <label>Correo*</label>
                    <input type="email" name="correo" />
                    <label>Teléfono</label>
                    <input required type="text" name="telefono" />
                </div>
            </form>
            <form className="form-direcciones">
                <h2>Dirección de envío</h2>
                <label>Codigo Postal</label>
                <input type="text" value="22600" name="cp" readOnly />
                <label>Comunidad Autonoma</label>
                <input disabled type="text" value="Aragon" name="provincia" />
                <label>Localidad</label>
                <input disabled type="text" value="Sabiñanigo" name="localidad" />
                <label>Calle</label>
                <input type="text" value="Torla" name="calle" readOnly />
                <label>Numero</label>
                <input type="text" value="1" name="numero" readOnly />
            </form>

            <form className="form-direcciones">
                <h2>Dirección de envío</h2>
                <label>Codigo Postal</label>
                <input type="text" value="23311" name="cp" readOnly />
                <label>Comunidad Autonoma</label>
                <input disabled type="text" value="Andalucia" name="provincia" />
                <label>Localidad</label>
                <input disabled type="text" value="Agrupacion Santo Tome" name="localidad" />
                <label>Calle</label>
                <input type="text" value="Bago" name="calle" readOnly />
                <label>Numero</label>
                <input type="text" value="3" name="numero" readOnly />
            </form>
            <form>
                <label>Peso</label>
                <input min="2" placeholder="Peso" type="number" name="peso" max="5" />
                <label>Precio</label>
                <input disabled placeholder="Precio" type="text" value="7.65" name="precio" />
            </form>
            <div className="boton-tramitar-contenedor">
                <button className="tramitar" type="submit">Tramitar</button>
            </div>
        </div>
    );

}