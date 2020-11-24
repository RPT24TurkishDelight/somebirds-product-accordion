import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Chevron from './chevron.jsx';

const Accordion = (props) => {

  let start = (props.openedSectionId === props.index) ? 'open' : 'closed';
  const [status, setStatus] = useState(start);

  if(status !== start) {
    setStatus(start);
  }

  const [height, setHeight] = useState('0px');
  const [icon, setIcon] = useState('icon')
  const element = useRef(null);

  const toggle = (e) => {
    props.click(e, props.index);
    setStatus(status === 'closed' ? 'open' : 'closed');
  }

  useEffect( () => {
    setHeight(status === 'closed' ? '0px' : `${element.current.scrollHeight}px`);
    setIcon(status === 'closed' ? 'chevron' : 'chevron rotate');
  }, [status]);

  //check if it needs to render a list component
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
      </div>
    </div>
  )
}

export default Accordion;