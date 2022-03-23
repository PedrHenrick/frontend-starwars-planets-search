import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import PlanetSearchContext from './PlanetSearchContext';
import planetApi from '../services/planetApi';

function PlanetSearchProvider({ children }) {
  const { Provider } = PlanetSearchContext;
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const returnApi = async () => {
      const valuePlanet = await planetApi();
      setData(valuePlanet.results);
    };
    returnApi();
  }, []);

  useEffect(() => {
    const disabledMutate = () => {
      if (value === '') setIsVisible(true);
      else setIsVisible(false);
    };
    disabledMutate();
  }, [value]);

  function filterName(planet) {
    const planetFilter = planet.name.toUpperCase().includes(name.toUpperCase());
    return planetFilter;
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    let valueReturn = [];

    if (comparison === 'maior que') {
      valueReturn = data
        .filter((Planets) => Planets[column] - value > 0);
    }
    if (comparison === 'menor que') {
      valueReturn = data
        .filter((Planets) => Planets[column] - value < 0
        || Planets[column] === 'unknown');
    }
    if (comparison === 'igual a') {
      valueReturn = data
        .filter((Planets) => Planets[column] === value);
    }

    setData(valueReturn);
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
        isVisible,
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
