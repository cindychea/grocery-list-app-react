import React from 'react';

const Item = ({group, value, content}) => {
  console.log(`Channel: value: ${value}`);

  const handleUp = () => {
    console.log('+1');
  };

  const handleDown = () => {
    console.log('+1');
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <React.Fragment>
      <li className={ group }>
        <button onClick={ handleDown }>-</button>
          <span onChange={ handleChange }>{ value } { content }</span>
        <button onClick={ handleUp }>+</button>
      </li>
    </React.Fragment>
  )
};

export default Item;