import React from 'react';
import PlanetSearchProvider from './context/PlanetSearchProvider';

import Home from './pages/Home';

function App() {
  return (
    <PlanetSearchProvider>
      <Home />
    </PlanetSearchProvider>
  );
}

export default App;
