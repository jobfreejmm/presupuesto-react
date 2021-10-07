/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import Gasto from './Gasto';

const Lista = ({ gastos }) => (
  <div className="gastos-realizados">
    <h2>Lista</h2>
    {gastos.map((gasto) => (
      <Gasto gasto={gasto} />
    ))}
  </div>
);
Lista.propTypes = {
  gastos: PropTypes.instanceOf(Array).isRequired,
};

export default Lista;
