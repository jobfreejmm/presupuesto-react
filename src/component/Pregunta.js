/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Pregunta = ({ setPresupuesto, setRestante, setPregunta }) => {
  const [cantidad, setCantidad] = React.useState(0);
  const [error, setError] = React.useState(false);
  /**
   * @param  {event} e
   */
  const onChange = (e) => {
    setCantidad(parseInt(e.target.value, 10));
  };
  const submitPresupuesto = (e) => {
    e.preventDefault();
    // Validar
    if (cantidad < 1 || Number.isNaN(cantidad)) {
      setError(true);
      return;
    }
    // Realizar lo que se valida
    setError(false);
    // Guardar cantidad en el state
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setPregunta(false);
  };

  console.log('test');
  return (
    <>
      {error ? (<Error mensaje="El presupuesto es incorrecto" />) : null}
      <h2>Coloca tu presupuesto</h2>
      <form onSubmit={submitPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={onChange}
        />
        <button type="submit" className="button-primary u-full-width">
          Definir Presupuesto
        </button>

      </form>
    </>
  );
};

Pregunta.propTypes = {
  setPresupuesto: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired,
  setPregunta: PropTypes.func.isRequired,

};
export default Pregunta;
