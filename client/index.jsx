import React from 'react';
import ReactDOM from 'react-dom';
import ProductMenu from './components/productMenu.jsx';
import Header from './components/Header.jsx';
let params = new URLSearchParams(window.location.search);
let val = params.get('prod');
let productId = val ? val : 1;

ReactDOM.render(<ProductMenu modelId={productId}/>, document.getElementById('accordion-container'));

ReactDOM.render(<Header modelId={productId}/>, document.getElementById('header-container'));