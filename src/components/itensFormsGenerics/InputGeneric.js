import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PlanetSearchContext from '../../context/PlanetSearchContext';

function InputGeneric({ name, type, id }) {
  const { handleChange } = useContext(PlanetSearchContext);

  return (
    <label htmlFor={ name }>
      <input
        type={ type }
        name={ name }
        id={ name }
        data-testid={ id }
        onChange={ ({ target }) => handleChange(target) }
      />
    </label>
  );
}

export default InputGeneric;

InputGeneric.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
