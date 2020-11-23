import React from 'react';

const ItemList = (props) => {

  let items = props.list.map((item) => {
    return <li>{item}</li>
  });

  return (
    <div className='accordion_text'>
      <ul className='list'>{items}</ul>
    </div>
  )
}

export default ItemList;