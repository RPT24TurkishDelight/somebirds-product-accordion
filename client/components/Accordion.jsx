import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Chevron from './chevron.jsx';
import accStyles from './css/accordionStyles.module.css';

const Accordion = (props) => {

  const [status, setStatus] = useState('closed');
  const [height, setHeight] = useState('0px');
  const [icon, setIcon] = useState('')
  const element = useRef(null);

  let start = (props.openedSectionId === props.index) ? 'open' : 'closed';
  if(status !== start) {
    setStatus(start);
  }


  const toggle = (e) => {
    props.click(e, props.index);
    setStatus(status === 'closed' ? 'open' : 'closed');
  }

  useEffect( () => {
    setHeight(status === 'closed' ? '0px' : `${element.current.scrollHeight}px`);
    setIcon(status === 'closed' ? '' : 'rotate');
  }, [status]);

  //check if it needs to render a list component
  const content = (props.index === 1) ?
                  props.content :
                  <p className={accStyles.accordionText}>{props.content}</p>

  return (
    <div className={accStyles.accordionSection}>
      <button className={`${accStyles.accordion} ${accStyles[status]}`} onClick={() => toggle()}>
        <p className={accStyles.accordionTitle}>{props.title} <Chevron className={`${accStyles.chevron} ${accStyles[icon]}`} height={10} width={10} fill={'black'}/></p>
      </button>
      <div className={accStyles.accordionContent} ref={element} style={{maxHeight: `${height}`}}>
        {content}
      </div>
    </div>
  )
}

export default Accordion;