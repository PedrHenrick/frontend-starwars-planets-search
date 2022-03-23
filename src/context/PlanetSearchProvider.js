import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import PlanetSearchContext from './PlanetSearchContext';
import planetApi from '../services/planetApi';

function PlanetSearchProvider({ children }) {
  const { Provider } = PlanetSearchContext;
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({
    filterByName: {
      name: '',
    },
  });

  useEffect(() => {
    const returnApi = async () => {
      const valuePlanet = await planetApi();
      setData(valuePlanet.results);
    };
    returnApi();
  }, []);

  function filterName(planet) {
    const name = planet.name.includes(filterByName.name);
    return name;
  }

  function handleChange(target) {
    setFilterByName({ name: target.value });
  }

  return (
    <Provider value={ { data, handleChange, filterName } }>
      { children }
    </Provider>
  );
}

export default PlanetSearchProvider;

PlanetSearchProvider.defaultProps = {
  children: {},
};

PlanetSearchProvider.propTypes = {
  children: PropTypes.element,
};
