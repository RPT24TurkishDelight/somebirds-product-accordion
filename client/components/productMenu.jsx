import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import Accordian from './accordian.jsx';

const ProductMenu = (props) => {

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