import React from 'react';
import PlanetSearchProvider from './context/PlanetSearchProvider';

import TableOfDatas from './components/TableOfDatas';
import './styles/table.css';
import AllFilter from './components/AllFilters';

function App() {
  return (
    <PlanetSearchProvider>
      <AllFilter />
      <TableOfDatas />
    </PlanetSearchProvider>
  );
}

export default App;
