/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { revisarPresupuesto } from './helpers';

const ControlPresupuesto = ({ presupuesto, restante }) => {
  console.log(presupuesto);

  return (
    <>
      <div className="alert alert-primary">
        Presupuesto: $
        {presupuesto}
      </div>
      {restante === 0 ? (
        <div className="alert alert-success">
          Su presupuesto de
          {' '}
          $
          {presupuesto}
          {' '}
          ha terminado
        </div>
      ) : null }
      {restante < 0 ? (
        <div className="alert alert-success">
          Su gasto excede el restante de
          {' '}
          $
          {restante}
        </div>
      ) : null }
      {restante > 0 ? (
        <div className={revisarPresupuesto(presupuesto, restante)}>
          {restante}
        </div>
      ) : null }

    </>
  );
};
ControlPresupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
};

export default ControlPresupuesto;
