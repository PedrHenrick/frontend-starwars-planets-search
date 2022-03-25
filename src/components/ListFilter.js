import React, { useContext } from 'react';
import PlanetSearchContext from '../context/PlanetSearchContext';

function ListFilter() {
  const { listFilter, deleteFilter } = useContext(PlanetSearchContext);

  return (
    <ul>
      { listFilter.map((li, index) => (
        <li
          key={ index }
        >
          {`${li[0]} ${li[1]} ${li[2]}`}
          {' '}
          <button
            type="button"
            data-testid="filter"
            onClick={ () => deleteFilter(index) }
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ListFilter;
