import React from 'react';

const Item = ({group, value, content}) => {
  console.log(`Channel: value: ${value}`);

  const updateValue = (newValue) => {
    console.log(`old value ${value}`)
    value = newValue;
    console.log(`value after ${value}`)
  }

  return (
    <React.Fragment>
      <li className={ group }>
        <button onClick={ () => updateValue(value-1)  }>-</button>
          <span onChange={ ({target}) => updateValue(target.value) }>{ value } { content }</span>
        <button onClick={ () => updateValue(value+1) }>+</button>
      </li>
    </React.Fragment>
  )
};

export default Item;