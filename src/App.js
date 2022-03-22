import React from 'react';
import PlanetSearchProvider from './context/PlanetSearchProvider';

import TableOfDatas from './components/TableOfDatas';
import './styles/table.css';

function App() {
  return (
    <PlanetSearchProvider>
      <TableOfDatas />
    </PlanetSearchProvider>
  );
}

export default App;
