import React from 'react';
import PropTypes from 'prop-types';

function SelectGeneric({ name, id, values, funcOfChange }) {
  return (
    <label htmlFor={ name }>
      <select
        id={ name }
        data-testid={ id }
        onChange={ ({ target }) => funcOfChange(target) }
      >
        { values.map((value, index) => <option key={ index }>{ value }</option>) }
      </select>
    </label>
  );
}

export default SelectGeneric;

SelectGeneric.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  funcOfChange: PropTypes.func.isRequired,
};
