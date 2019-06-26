import React from 'react';

const Item = ({group, content}) => {
  
  return (
    <React.Fragment>
      <li className={ group }>
        <button>-</button>
          <span>{ content }</span>
        <button>+</button>
      </li>
    </React.Fragment>
  )
};

export default Item;