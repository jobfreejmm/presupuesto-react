/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Gasto = ({ gasto }) => (
  <ul>
    <li className="gastos">
      <p>
        {gasto.nombre}
        <span className="gasto">
          $
          {gasto.cantidad}
        </span>
      </p>

    </li>
  </ul>
);

Gasto.protoTypes = {
  Gasto: PropTypes.object.isRequired,
};
export default Gasto;
