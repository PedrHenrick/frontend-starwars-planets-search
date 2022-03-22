import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import PlanetSearchContext from './PlanetSearchContext';
import planetApi from '../services/planetApi';

function PlanetSearchProvider({ children }) {
  const { Provider } = PlanetSearchContext;
  const [data, setData] = useState([]);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const returnApi = async () => {
      const valuePlanet = await planetApi();
      setData(valuePlanet.results);
      setTitles(() => Object.keys(valuePlanet.results[0])
        .filter((title) => title !== 'residents'));
    };
    returnApi();
  }, []);

  return (
    <Provider value={ { data, titles } }>
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
