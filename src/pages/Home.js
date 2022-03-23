import React from 'react';

import '../styles/table.css';
import Header from '../components/Header';
import NavFilter from '../components/FormFilter';
import Table from '../components/Table';

function AllFilter() {
  return (
    <main>
      <Header />
      <NavFilter />
      <Table />
    </main>
  );
}

export default AllFilter;
