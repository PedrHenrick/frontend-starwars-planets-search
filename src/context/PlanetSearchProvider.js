import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import PlanetSearchContext from './PlanetSearchContext';
import planetApi from '../services/planetApi';

function PlanetSearchProvider({ children }) {
  const { Provider } = PlanetSearchContext;
  const [data, setData] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    const returnApi = async () => {
      const valuePlanet = await planetApi();
      setData(valuePlanet.results);
    };
    returnApi();
  }, []);

  function filterName(planet) {
    const planetFilter = planet.name.toUpperCase().includes(name.toUpperCase());
    return planetFilter;
  }

  function handleChange(target) {
    setName(target.value);
  }

  return (
    <Provider value={ { data, filterByName: { name }, handleChange, filterName } }>
      { children }
    </Provider>
  );
}

export default PlanetSearchProvider;

PlanetSearchProvider.defaultProps = {
  children: {},
};

PlanetSearchProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
