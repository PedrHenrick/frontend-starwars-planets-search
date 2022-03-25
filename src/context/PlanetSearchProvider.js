import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import PlanetSearchContext from './PlanetSearchContext';
import planetApi from '../services/planetApi';

function PlanetSearchProvider({ children }) {
  const { Provider } = PlanetSearchContext;
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const [valuesColumn, setValuesColumn] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [initialValuesColumn, setinitialValuesColumn] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const [listFilter, setListFilter] = useState([]);

  // ComponentDidMount - Faz o fetch inicial
  useEffect(() => {
    const returnApi = async () => {
      const valuePlanet = await planetApi();
      setData(valuePlanet.results);
      setNewData(valuePlanet.results);
    };
    returnApi();
  }, []);

  // Habilita ou desabilita o botão quando não há nenhum valor no input de números
  useEffect(() => {
    if (value === '') setIsVisible(true);
    else setIsVisible(false);
  }, [value]);

  // funcção responsável por filtrar com o que sobrou dos filtros ou limpar tudo
  function filtration(newList) {
    if (newList.length === 0) {
      setData(newData);
    } else {
      newList.forEach((filter) => {
        const dataRefiltered = newData.filter((Planets) => {
          if (filter[1] === 'maior que') {
            return Number(Planets[filter[0]]) > filter[2];
          }
          if (filter[1] === 'menor que') {
            return Number(Planets[filter[0]]) < filter[2];
          }
          return Planets[filter[0]] === filter[2];
        });
        setData(dataRefiltered);
      });
    }
  }

  // Apaga o filtro da lista, adiciona novamente a categoria e chama a função para filtrar com o que sobrou ou limpar tudo
  function deleteFilter(index) {
    const newList = listFilter
      .filter((filter) => filter !== listFilter[index]);

    if (newList) filtration(newList);

    setValuesColumn([...valuesColumn, listFilter[index][0]]);
    setListFilter(newList);
  }

  // Apaga todos os filtros e retorna as configurações para o inicial
  function deleteAllFilter() {
    setData(newData);
    setValuesColumn(initialValuesColumn);
    setListFilter([]);
  }

  // Filtra por nome escrito no input
  function filterName(planet) {
    const planetFilter = planet.name.toUpperCase().includes(name.toUpperCase());
    return planetFilter;
  }

  // Faz o submit do formulário pegando as informações e filtrando
  function handleSubmitForm(e) {
    e.preventDefault();
    setListFilter([...listFilter, [column, comparison, value]]);

    let valueReturn = [];

    if (comparison === 'maior que') {
      valueReturn = data
        .filter((Planets) => Number(Planets[column]) > value);
    }
    if (comparison === 'menor que') {
      valueReturn = data
        .filter((Planets) => Number(Planets[column]) < value);
    }
    if (comparison === 'igual a') {
      valueReturn = data
        .filter((Planets) => Planets[column] === value);
    }
    setinitialValuesColumn(valuesColumn);
    setValuesColumn(valuesColumn.filter((valueColumn) => valueColumn !== column));
    setData(valueReturn);
  }

  // Adiciona no estado global as informações das variáveis
  function handleChange(target) {
    if (target.name === 'filterName') setName(target.value);
    else if (target.name === 'filterNumber') setValue(target.value);
    else if (target.name === 'OrderColumn') setColumn(target.value);
    else if (target.name === 'typeColumn') setComparison(target.value);
  }

  return (
    <Provider
      value={ {
        data,
        filterByName: { name },
        filterByNumericValues: [{ column, comparison, value }],
        handleSubmitForm,
        filterName,
        value,
        handleChange,
        isVisible,
        valuesColumn,
        listFilter,
        deleteFilter,
        deleteAllFilter,
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
