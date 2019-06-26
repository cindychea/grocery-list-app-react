import React from 'react';

const Item = ({group, value, content}) => {
  console.log(`Channel: value: ${value}`);

  const updateValue = (newValue) => {
    console.log(`updating with ${newValue}`)
  }

  return (
    <React.Fragment>
      <li className={ group }>
        <button onClick={ () => updateValue(-1)  }>-</button>
          <span onChange={ ({target}) => updateValue(target.value) }>{ value } { content }</span>
        <button onClick={ () => updateValue(1) }>+</button>
      </li>
    </React.Fragment>
  )
};

export default Item;