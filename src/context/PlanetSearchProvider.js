import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import PlanetSearchContext from './PlanetSearchContext';
import planetApi from '../services/planetApi';

function PlanetSearchProvider({ children }) {
  const { Provider } = PlanetSearchContext;
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState(0);

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

  function handleSubmitForm(e) {
    e.preventDefault();
    console.log('submeti');
  }

  function handleNameChange(target) {
    setName(target.value);
  }

  function handleValueChange(target) {
    setValue(target.value);
  }

  function handleColumnChange(target) {
    setColumn(target.value);
  }

  function handleComparisonChange(target) {
    setComparison(target.value);
  }

  return (
    <Provider
      value={ {
        data,
        filterByName: { name },
        filterByNumericValues: [{ column, comparison, value }],
        handleNameChange,
        handleSubmitForm,
        filterName,
        value,
        handleValueChange,
        handleColumnChange,
        handleComparisonChange,
      } }
    >
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
