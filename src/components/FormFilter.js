import React, { useContext } from 'react';
import PlanetSearchContext from '../context/PlanetSearchContext';

import SelectGeneric from './FormsGenerics/SelectGeneric';
import InputGeneric from './FormsGenerics/InputGeneric';

function NavFilter() {
  const {
    handleSubmitForm,
    value,
    isVisible,
    valuesColumn,
    handleChange,
    deleteAllFilter,
  } = useContext(PlanetSearchContext);

  return (
    <form onSubmit={ (e) => handleSubmitForm(e) }>
      <SelectGeneric
        name="OrderColumn"
        id="column-filter"
        values={ valuesColumn }
        funcOfChange={ handleChange }
      />
      <SelectGeneric
        name="typeColumn"
        id="comparison-filter"
        values={ [
          'maior que',
          'menor que',
          'igual a',
        ] }
        funcOfChange={ handleChange }
      />
      <InputGeneric
        type="number"
        name="filterNumber"
        id="value-filter"
        value={ value }
        funcOfChange={ handleChange }
      />
      <button
        type="submit"
        data-testid="button-filter"
        disabled={ isVisible }
      >
        filtrar
      </button>
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => deleteAllFilter() }
      >
        Remover todas filtragens
      </button>
    </form>
  );
}

export default NavFilter;
