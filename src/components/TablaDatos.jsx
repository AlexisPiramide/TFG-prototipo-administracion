import '../style/TablaDatos.css';

export default function TablaDatos({ datos }) {
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
      {datos.map((dato) => (
        <tr key={dato.dia}>
          <td>{dato.dia}</td>
          <td>{dato.temperaturaMaxima}</td>
          <td>{dato.temperaturaMinima}</td>
          <td>{dato.humedadMedia}</td>
          <td>{dato.vientoMaxima}</td>
          <td>{dato.vientoMinima}</td>
          <td>{dato.probabilidadPrecipitacion}</td>
          <td>{dato.municipio}</td>
          <td>{dato.localidad}</td>
        </tr>
      ))}
    </table>
  );
}