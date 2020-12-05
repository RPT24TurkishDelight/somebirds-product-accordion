import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import accStyles from './css/accordionStyles.module.css';

const Header = (props) => {

  const [modelName, setModelName] = useState('fake name');
  const [modelId, setModelId] = useState(1);
  const [shoeData, setShoeData] = useState({});
  const [header, setHeaderData] = useState('');


  useEffect( () => {
    let queryString = window.location.search;
    let params = new URLSearchParams(queryString);
    let productId = params.get('prod');

    axios({
      method: 'get',
      url: `/products/${productId}/summary`
    })
    .then((response) => {
      setShoeData(response.data);
      setModelId(productId);
      setModelName(response.data.name);
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
      {console.log(title)}
      <h1 className={accStyles.headerName}>{capitalizeWords(title)}</h1>
        <p className={accStyles.headerPrice}>{`$ ${shoeData.price}`}</p>
        <div className={accStyles.stars}>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
        </div>
    </div>
  )
}

export default Header;