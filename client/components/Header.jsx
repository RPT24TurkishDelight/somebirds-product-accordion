import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import accStyles from './css/accordionStyles.module.css';
import starStyles from './css/stars.module.css';
const _ = require('lodash');

const Header = (props) => {

  const [modelName, setModelName] = useState('fake name');
  const [modelId, setModelId] = useState(props.modelId);
  const [shoeData, setShoeData] = useState({});
  const [header, setHeaderData] = useState('');
  const [render, setRender] = useState(false);

  const [stars, setStars] = useState('4.63');
  const [reviewCount, setReviewCount] = useState(12)

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

  useEffect( () => {

    axios({
      method: 'get',
      url: `/shoes/${modelId}/rating`
    })
    .then((response) => {
      console.log(response);
      setStars(response.data.rating_average);
      setReviewCount(response.data.review_count);
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
    });
    return capitalWords.join(' ');
  }

  const buildStars = (rating) => {
    let wholeStars = Math.floor(Number(rating));
    let halfStar = (Math.round(Number(rating)) > Number(rating)) ? true : false;

    let stars = _.times(wholeStars, () => {
      return <div className={starStyles.smallStar}></div>
    });

    if (halfStar) {
      stars.push(<div className={starStyles.smallHalfStar}></div>)
    }

    return stars;
  }

  return (
    <div>
      {render && <div classname={accStyles.headerBox}>
        <h1 className={accStyles.headerName}>{capitalizeWords(title)}</h1>
          <p className={accStyles.headerPrice}>{`$ ${shoeData.price}`}</p>
          <div className={accStyles.stars}>
            <a href="#reviews-container">
              <div className={accStyles.alignStars}>{buildStars(stars)}</div>
            </a>
            <a href="#reviews-container">
              <div className={accStyles.reviewCount}>{`(${reviewCount})`}</div>
              </a>
          </div>
      </div>}
    </div>
  )
}

export default Header;