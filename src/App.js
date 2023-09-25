import logo from './logo.svg';
import './App.css';
import Api from './api.js';
<div className="dashboard">
  <h1>Dashboard de Condiciones Atmosféricas</h1>
  {/* <select
    onChange={(e) => setEstadoActual(e.target.value)}
    value={estadoActual}
  >
    <option value="">SELECCIONA UN ESTADO</option>
    {estadosMx.map((opcion) => (
      <option key={opcion.id} value={opcion.name}>
        {opcion.name}
      </option>
    ))}
  </select>

  {climaSeleccionado && (
    <div className="clima-seleccionado">
      <h2>Clima en {climaSeleccionado.name}</h2>
      <img
        src={condicionesImagenes[climaSeleccionado.skydescriptionlong]}
        alt={climaSeleccionado.skydescriptionlong}
      />
      <p>{climaSeleccionado.skydescriptionlong}</p>
    </div>
  )} */}

  {/* <div className="ciudades-list">
    {ciudadesFiltradas.map((ciudad, index) => {
      return (
        <div key={index} className="ciudad-card">
          <p>
            {ciudad.name} - <i>{ciudad.skydescriptionlong}</i>
          </p>
        </div>
      );
    })}
  </div> */}
</div>

const condicionesImagenes = {

};
// const [fondoEstado, setFondoEstado] = useState("");
// useEffect(() => {
//   if (estadoActual) {
//     const ciudades = datos.filter((ciudad) => ciudad.state === estadoActual);
//     setCiudadesFiltradas(ciudades);
    
//     // Actualiza el fondo del estado seleccionado
//     setFondoEstado(condicionesImagenes[ciudades[0].skydescriptionlong]);
//   } else {
//     setCiudadesFiltradas([]);
//     setFondoEstado(""); // Borra el fondo si no se selecciona un estado
//   }
// }, [estadoActual, datos]);



function App() {
  return (
    <div className="App">
      <Api/>
    </div>
  );
}

export default App;
