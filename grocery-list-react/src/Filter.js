import React from 'react';
import Category from './Category';

const Filter = () => {
  return (
    <ul className="filters">
      <Category value="all" filter="filter0" />
      <Category value="meat" filter="filter1" />
      <Category value="prod" filter="filter2" />
      <Category value="dairy" filter="filter3" />
      <Category value="bakery" filter="filter4" />
    </ul>
  )
};

export default Filter;