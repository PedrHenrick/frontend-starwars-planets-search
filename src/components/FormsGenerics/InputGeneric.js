import React from 'react';
import PropTypes from 'prop-types';

function InputGeneric({ name, type, id, value, funcOfChange }) {
  return (
    <label htmlFor={ name }>
      <input
        type={ type }
        name={ name }
        id={ name }
        data-testid={ id }
        value={ value }
        onChange={ ({ target }) => funcOfChange(target) }
      />
    </label>
  );
}

export default InputGeneric;

InputGeneric.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  funcOfChange: PropTypes.func.isRequired,
};
