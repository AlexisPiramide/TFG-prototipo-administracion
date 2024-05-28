import '../style/TablaDatos.css';

export default function TablaDatos({ datos }) {

  //AÑADIR BOTON PARA EDITAR EN MODO ARMINISTRADOR
  return (
    <table>
      <tbody>
        <tr>
          <th>Dia</th>
          <th>Temperatura Máxima</th>
          <th>Temperatura Mínima</th>
          <th>Humedad Media</th>
          <th>Viento Máxima</th>
          <th>Viento Mínima</th>
          <th>Probabilidad de Precipitación</th>
          <th>Municipio</th>
          <th>Localidad</th>
        </tr>
        {datos.map((dato) => (
          <tr key={new Date(dato.dia).toLocaleDateString()}>
            <td>{new Date(dato.dia).toLocaleDateString()}</td>
            <td>{dato.temperatura_maxima} ºC</td>
            <td>{dato.temperatura_minima} ºC</td>
            <td>{dato.humedad_media}%</td>
            <td>{dato.viento_maxima} Km/H</td>
            <td>{dato.viento_minima} Km/H</td>
            <td>{dato.probabilidad_precipitacion}%</td>
            <td>{dato.lugar.municipio}</td>
            <td>{dato.lugar.localidad}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}