import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import accStyles from './css/accordionStyles.module.css';
import starStyles from './css/stars.module.css';

const Header = (props) => {

  const [modelName, setModelName] = useState('fake name');
  const [modelId, setModelId] = useState(props.modelId);
  const [shoeData, setShoeData] = useState({});
  const [header, setHeaderData] = useState('');
  const [render, setRender] = useState(false);


  useEffect( () => {

    axios({
      method: 'get',
      url: `/products/${modelId}/summary`
    })
    .then((response) => {
      setShoeData(response.data);
      setModelName(response.data.name);
      setRender(true);
    })
    .catch((err) => {
      return err;
    });

  }, [])

  let title = `${shoeData.gender} ${modelName}`

  const capitalizeWords = (header) => {
    let words = header.split(' ')
    let capitalWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    return capitalWords.join(' ');
  }

  return (
    <div>
      {render && <div>
        <h1 className={accStyles.headerName}>{capitalizeWords(title)}</h1>
          <p className={accStyles.headerPrice}>{`$ ${shoeData.price}`}</p>
          <div className={accStyles.stars}>
            <span className={`${starStyles.fa} ${starStyles['fa-star']} ${starStyles.checked}`}></span>
            <span className={`${starStyles.fa} ${starStyles['fa-star']} ${starStyles.checked}`}></span>
            <span className={`${starStyles.fa} ${starStyles['fa-star']} ${starStyles.checked}`}></span>
            <span className={`${starStyles.fa} ${starStyles['fa-star']} ${starStyles.checked}`}></span>
            <span className={`${starStyles.fa} ${starStyles['fa-star']}`}></span>
          </div>
      </div>}
    </div>
  )
}

export default Header;