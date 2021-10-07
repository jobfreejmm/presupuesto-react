/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import React, { useEffect } from 'react';
import Pregunta from './component/Pregunta';
import Formulario from './component/Formulario';
import Lista from './component/Lista';
import ControlPresupuesto from './component/ControlPresupuesto';

function App() {
  let gastosIniciales = JSON.parse(localStorage.getItem('gastos'));
  if (!gastosIniciales) {
    gastosIniciales = [];
  }

  const [presupuesto, setPresupuesto] = React.useState(0);
  const [restante, setRestante] = React.useState(0);
  const [pregunta, setPregunta] = React.useState(true);
  // Estado para almacenar los gastos
  const [gastos, setGastos] = React.useState([]);
  // Stado para almacenar el gasto
  const [gasto, setGasto] = React.useState({});
  const [crearGasto, setCrearGasto] = React.useState(false);
  console.log('Gasto', gasto);
  console.log('Gastos', gastos);

  // else {
  //   localStorage.setItem('gastos', JSON.stringify(gastos));
  // }

  // Use Effect que actualiza el restante
  React.useEffect(() => {
    // Agregando en el local storage
    console.log('usee', gastos.length);
    if (crearGasto) {
      // Agrega el nuevo presupueso
      setGastos([
        ...gastos,
        gasto,
      ]);
      setCrearGasto(false);
      const gastoRestante = restante - gasto.cantidad;
      setRestante(gastoRestante);
      const local = {
        gasto,
        presupuesto,
        pregunta,
      };
      localStorage.setItem('gastos', JSON.stringify(local));
    }
  }, [gasto, gastosIniciales]);
  // Cuando agreguemos un nuevo gasto
  console.log('out', gastosIniciales);

  return (
    <div className="container">
      <header>

        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {pregunta ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setPregunta={setPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  restante={restante}
                  setGasto={setGasto}
                  setCrearGasto={setCrearGasto}
                  // agregarNuevoGasto={agregarNuevoGasto}
                />
              </div>
              <div className="one-half column">
                <Lista gastos={gastos} />
                <ControlPresupuesto presupuesto={presupuesto} restante={restante} />
              </div>
            </div>
          )}

        </div>
      </header>
    </div>
  );
}

export default App;
