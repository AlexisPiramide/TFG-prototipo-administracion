import '../style/TablaDatos.css';

export default function TablaDatos({ datos }) {
  console.log(datos.dia);
  return (
    <table>
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
      <tr>
        <td>{datos.dia}</td>
        <td>{datos.temperaturaMaxima}</td>
        <td>{datos.temperaturaMinima}</td>
        <td>{datos.humedadMedia}</td>
        <td>{datos.vientoMaxima}</td>
        <td>{datos.vientoMinima}</td>
        <td>{datos.probabilidadPrecipitacion}</td>
        <td>{datos.municipio}</td>
        <td>{datos.localidad}</td>
      </tr>
    </table>
  );
}