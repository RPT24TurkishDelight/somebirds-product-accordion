import React from 'react';
import accStyles from './css/accordionStyles.module.css';

const ItemList = (props) => {

  let items = props.list.map((item) => {
    return <li>{item}</li>
  });

  return (
    <div className={accStyles.accordionText}>
      <ul className={accStyles.list}>{items}</ul>
    </div>
  )
}

export default ItemList;