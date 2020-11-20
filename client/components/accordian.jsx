import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Chevron from './chevron.jsx';

const Accordian = (props) => {
  let start = (props.openedSectionId === props.index) ? 'open' : 'closed';
  //console.log(`initial state for ${props.index}: ${start}`);
  const [status, setStatus] = useState(start);
  //console.log(status);
  if(status !== start) {
    console.log('triggered');
    setStatus(start);
  }

  const [height, setHeight] = useState('0px');
  const [icon, setIcon] = useState('icon')
  const element = useRef(null);

  const toggle = (e) => {
    props.click(e, props.index);
    setStatus(status === 'closed' ? 'open' : 'closed');
    // setHeight(status === 'open' ? '0px' : `${element.current.scrollHeight}px`);
    // setIcon(status === 'open' ? 'icon' : 'icon rotate');
  }

  useEffect( () => {
    // console.log('inside use effect - accordion');
    setHeight(status === 'closed' ? '0px' : `${element.current.scrollHeight}px`);
    setIcon(status === 'closed' ? 'icon' : 'icon rotate');
  }, [status]);

  const content = (props.index === 1) ?
                  props.content :
                  <p className='accordion_text'>{props.content}</p>

  return (
    <div className='accordion-section'>
      <button className={`accordion ${status}`} onClick={() => toggle()}>
        <p className='accordion_title'>{props.title} <Chevron className={`${icon}`} height={10} width={10} fill={'black'}/></p>
      </button>
      <div className={`accordion_content`} ref={element} style={{maxHeight: `${height}`}}>
        {content}
        {/* <p className='accordion_text'>{props.content}</p> */}
      </div>
    </div>
  )
}

export default Accordian;