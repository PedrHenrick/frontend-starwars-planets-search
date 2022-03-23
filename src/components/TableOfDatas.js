import React, { useContext } from 'react';
import PlanetSearchContext from '../context/PlanetSearchContext';

function TableOfDatas() {
  const { data, filterName, filterByName } = useContext(PlanetSearchContext);

  return (
    <table>
      <thead>
        <tr>
          { data[0]
          && Object.keys(data[0])
            .filter((title) => title !== 'residents')
            .map((header, index) => <th key={ index }>{ header }</th>)}
        </tr>
      </thead>
      <tbody>
        { filterByName !== undefined
          && data.filter((planet) => filterName(planet))
            .map((infoPlanet, index) => (
              <tr key={ index }>
                { Object.entries(infoPlanet)
                  .filter((title) => title[0] !== 'residents')
                  .map((infoPlan, jindex) => <td key={ jindex }>{ infoPlan[1] }</td>)}
              </tr>
            ))}
      </tbody>
    </table>
  );
}

export default TableOfDatas;
