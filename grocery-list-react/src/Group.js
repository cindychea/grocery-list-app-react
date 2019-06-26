import React, { useState } from 'react';
import Item from './Item';

const Group = () => {
  let [m, setM] = useState(3);
  let [p, setP] = useState(4);
  let [d, setD] = useState(1);
  let [b, setB] = useState(2);

  return (
    <React.Fragment>
      <ul id="shoppingList" className="shoppinglist">
        <Item group="meat" value={m} setNewValue={setM} content="Steaks"/>
        <Item group="prod" value={p} setNewValue={setP} content="Apples"/>
        <Item group="dairy" value={d} setNewValue={setD} content="Milk (1L, 2%)"/>
        <Item group="bakery" value={b} setNewValue={setB} content="Baguettes"/>
      </ul>
    </React.Fragment>
  )
};

export default Group;