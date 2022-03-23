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
    isVisible,
    valuesColumn,
  } = useContext(PlanetSearchContext);

  return (
    <form onSubmit={ (e) => handleSubmitForm(e) }>
      <SelectGeneric
        name="OrderColumn"
        id="column-filter"
        values={ valuesColumn }
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
        disabled={ isVisible }
      >
        filtrar
      </button>
    </form>
  );
}

export default NavFilter;
