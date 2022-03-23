import React, { useContext } from 'react';
import InputGeneric from './FormsGenerics/InputGeneric';
import PlanetSearchContext from '../context/PlanetSearchContext';

function Header() {
  const { handleNameChange, filterByName } = useContext(PlanetSearchContext);

  return (
    <header>
      <InputGeneric
        name="filterName"
        type="text"
        id="name-filter"
        value={ filterByName.name }
        funcOfChange={ handleNameChange }
      />
    </header>
  );
}

export default Header;
