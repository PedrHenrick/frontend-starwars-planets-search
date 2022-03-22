import React, { useContext } from 'react';
import PlanetSearchContext from '../context/PlanetSearchContext';

function TableOfDatas() {
  const { data, titles } = useContext(PlanetSearchContext);

  return (
    <table>
      <thead>
        <tr>
          { titles && titles.map((title, index) => <td key={ index }>{ title }</td>) }
        </tr>
      </thead>
      <tbody>
        { data
          && data.map((infoPlanet, index) => (
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
