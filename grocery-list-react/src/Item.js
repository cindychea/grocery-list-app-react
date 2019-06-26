import React from 'react';

const Item = ({group, value, setNewValue, content}) => {
  console.log(`Channel: value: ${value}`);

  const updateValue = (newValue) => {
    setNewValue(newValue)
  }

  return (
    <React.Fragment>
      <li className={ group }>
        <button onClick={ () => updateValue(value-1)  }>-</button>
          <span>{ value } { content }</span>
        <button onClick={ () => updateValue(value+1) }>+</button>
      </li>
    </React.Fragment>
  )
};

export default Item;