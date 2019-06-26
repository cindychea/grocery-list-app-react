import React from 'react';
import Item from './Item';

const Group = () => {
  return (
    <React.Fragment>
      <Item group="meat" value={3} content="Steaks"/>
      <Item group="prod" value={4} content="Apples"/>
      <Item group="dairy" value={1} content="Milk (1L, 2%)"/>
      <Item group="bakery" value={2} content="Baguettes"/>
    </React.Fragment>
  )
};

export default Group;