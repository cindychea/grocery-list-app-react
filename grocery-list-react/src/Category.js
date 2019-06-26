import React from 'react';

const Category = ({value, filter}) => {
  return (
    <li><input type="radio" name="category" value={value} id={filter} /><label htmlFor={filter}>{value}</label></li>
  )
};

export default Category;