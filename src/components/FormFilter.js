import React, { useContext } from 'react';
import PlanetSearchContext from '../context/PlanetSearchContext';

import SelectGeneric from './FormsGenerics/SelectGeneric';
import InputGeneric from './FormsGenerics/InputGeneric';

function NavFilter() {
  const {
    handleSubmitForm,
    value,
    handleValueChange,
    handleColumnChange,
    handleComparisonChange,
  } = useContext(PlanetSearchContext);

  return (
    <form onSubmit={ (e) => handleSubmitForm(e) }>
      <SelectGeneric
        name="OrderColumn"
        id="column-filter"
        values={ [
          'population',
          'orbital_period',
          'diameter',
          'rotation_period',
          'surface_water',
        ] }
        funcOfChange={ handleColumnChange }
      />
      <SelectGeneric
        name="typeColumn"
        id="comparison-filter"
        values={ [
          'maior que',
          'menor que',
          'igual a',
        ] }
        funcOfChange={ handleComparisonChange }
      />
      <InputGeneric
        type="number"
        name="filterNumber"
        id="value-filter"
        value={ value }
        funcOfChange={ handleValueChange }
      />
      <button
        type="submit"
        data-testid="button-filter"
      >
        filtrar
      </button>
    </form>
  );
}

export default NavFilter;
