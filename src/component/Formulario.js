/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Error from './Error';

const Formulario = ({ setGasto, setCrearGasto, restante }) => {
  // Definimos el state
  const [nombre, setNombre] = React.useState('');
  const [cantidad, setCantidad] = React.useState(0);
  const [error, setError] = React.useState(false);
  const [disabled, setDisaled] = React.useState(false);

  // Agregar gasto
  const onSubmit = (e) => {
    e.preventDefault();
    // ValidaR
    if (cantidad < 1 || nombre.trim() === '' || Number.isNaN(cantidad)) {
      setError(true);
      return;
    }
    setError(false);
    // Construr el gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };
    console.log(gasto);
    // Pasar e gasto al componente principal
    setGasto(gasto);
    setCrearGasto(true);
    // Desactivar los input si el gasto es mayor al restante
    if (restante < cantidad) {
      console.log('restante menor que cero');
      setDisaled(true);
    }
    // Resetear el form
    setNombre('');
    setCantidad(0);
  };

  return (

    <>
      { error ? (<Error mensaje="Ambos campos son obligatorios o Presupuesto Invalido" />) : null}
      <h2>Agrega tus gastos</h2>
      <form
        onSubmit={onSubmit}
      >
        <div className="campo">
          <label htmlFor="gasto">Nombre del gasto:</label>
          <input
            type="text"
            className="u-full-width"
            name="gasto"
            placeholder="Ej. Transporte"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            disabled={disabled}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad cantidad:</label>
          <input
            type="number"
            className="u-full-width"
            name="cantidad"
            placeholder="1000"
            disabled={disabled}
            value={cantidad}
            onChange={(e) => setCantidad(Number.parseInt(e.target.value, 10))}
          />
        </div>
        <button type="submit" className="button-primary u-full-width">
          Agregar gasto
        </button>
      </form>
    </>
  );
};
Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setCrearGasto: PropTypes.func.isRequired,
  restante: PropTypes.number.isRequired,
};
export default Formulario;
