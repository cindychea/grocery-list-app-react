import React from 'react';
import Item from './Item';

const Group = () => {
  return (
    <React.Fragment>
      <Item group="meat" content="3 Steaks"/>
      <Item group="prod" content="4 Apples"/>
      <Item group="dairy" content="1 Milk (1L, 2%)"/>
      <Item group="bakery" content="2 Baguettes"/>
    </React.Fragment>
  )
};

export default Group;