import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import Chevron from './chevron.jsx';

const Accordian = (props) => {
  const [status, setStatus] = useState('closed');
  const [height, setHeight] = useState('0px');
  const [icon, setIcon] = useState('icon')
  const element = useRef(null);

  const toggle = () => {
    setStatus(status === 'closed' ? 'open' : 'closed');
    setHeight(status === 'open' ? '0px' : `${element.current.scrollHeight}px`);
    setIcon(status === 'open' ? 'icon' : 'icon rotate')
  }

  return (
    <div className='accordion-section'>
      <button className={`accordion ${status}`} onClick={() => toggle()}>
        <p className='accordion_title'>{props.title} <Chevron className={`${icon}`}height={10} width={10} fill={'black'}/></p>
      </button>
      <div className={`accordion_content`} ref={element} style={{maxHeight: `${height}`}}>
        <p className='accordion_text'>{props.content}</p>
      </div>
    </div>
  )
}

export default Accordian;