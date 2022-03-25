import React from 'react';

import '../styles/table.css';
import Header from '../components/Header';
import NavFilter from '../components/FormFilter';
import Table from '../components/Table';
import ListFilter from '../components/ListFilter';

function AllFilter() {
  return (
    <main>
      <Header />
      <NavFilter />
      <ListFilter />
      <Table />
    </main>
  );
}

export default AllFilter;
