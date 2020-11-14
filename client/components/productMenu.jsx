import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Accordian from './accordian.jsx';
import axios from 'axios';


const ProductMenu = (props) => {

  useEffect(() => {
    axios({
      method: 'get',
      url: `/products/${props.modelName}`
    })
    .then((response) => {
      console.log(response.data);
    })
  });


  return (
    <div className='menu'>
      <Accordian title='title one' text='this is some extra text'/>
      <Accordian title='title two' text='this is some extra text'/>
      <Accordian title='title three' text='this is some extra text'/>
      <Accordian title='title four' text='this is some extra text'/>
    </div>
  )
}

export default ProductMenu;