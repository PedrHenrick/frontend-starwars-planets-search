import React from 'react';
import InputGeneric from './itensFormsGenerics/InputGeneric';

function AllFilter() {
  return (
    <header>
      <InputGeneric
        name="filterName"
        type="text"
        id="name-filter"
      />
    </header>
  );
}

export default AllFilter;
