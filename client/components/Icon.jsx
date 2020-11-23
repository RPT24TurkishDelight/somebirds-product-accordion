import React from 'react';

function Icon(props) {

  return (
    <div className='icon-text'>
      <svg
        className='highlight-icon'
        height={props.height || 50}
        width={props.width || 50}
        viewBox={props.viewBox}
        xmlns="http://www.w3.org/2000/svg"
        dangerouslySetInnerHTML={{__html: props.content}}
      >
      </svg>
      <p className='icon-des'>{props.text}</p>
    </div>
  )
 }

 export default Icon;