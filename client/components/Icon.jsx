import React from 'react';
import accStyles from './css/Icon.module.css';

function Icon(props) {

  return (
    <div className={accStyles.iconText}>
      <svg
        className={accStyles.highlightIcon}
        height={props.height || 48}
        width={props.width || 48}
        viewBox={props.viewBox}
        xmlns="http://www.w3.org/2000/svg"
        dangerouslySetInnerHTML={{__html: props.content}}
      >
      </svg>
      <p className={accStyles.iconDes}>{props.text}</p>
    </div>
  )
 }

 export default Icon;