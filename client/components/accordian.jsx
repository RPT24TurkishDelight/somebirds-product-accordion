import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';

const Accordian = (props) => {
  const [active, setActive] = useState('');
  const [height, setHeight] = useState('0px');

  const toggle = () => {
    setActive(active === '' ? 'active' : '')
  }


  return (
    <div className={'accordian-section'}>
      <button classname={`accordian`} >
        <p className='accordian_title'>{props.title}</p>
      </button>
      <div className='accordian_content'>
        <p className='accordian_text'>{props.text}</p>
      </div>
    </div>
  )
}

export default Accordian;