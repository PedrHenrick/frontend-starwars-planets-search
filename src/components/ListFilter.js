import React, { useContext } from 'react';
import PlanetSearchContext from '../context/PlanetSearchContext';

function ListFilter() {
  const { listFilter, deleteFilter } = useContext(PlanetSearchContext);

  return (
    <div>
      { listFilter.map((li, index) => (
        <li
          key={ index }
          data-testid="filter"
        >
          {`${li[0]} ${li[1]} ${li[2]}`}
          {' '}
          <button
            type="button"
            onClick={ () => deleteFilter(index) }
          >
            X
          </button>
        </li>
      ))}
    </div>
  );
}

export default ListFilter;
