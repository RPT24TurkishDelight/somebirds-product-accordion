import React from 'react';

const ItemList = (props) => {

  if (props.list === undefined) {
    return (
      <div className='features_list'>
      </div>
      )
  } else {
    let items = props.list.map((item) => {
      return <li>{item}</li>
    });
    return (
      <div className='features_list'>
        <ul className='list'>{items}</ul>
      </div>
    )
  }
}

export default ItemList;