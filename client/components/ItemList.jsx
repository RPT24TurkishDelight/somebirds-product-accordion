import React from 'react';

const ItemList = (props) => {
  console.log(props);
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
        <ul>{items}</ul>
      </div>
    )
  }
}

export default ItemList;