import React from 'react';
import ReactDOM from 'react-dom';
import ProductMenu from './components/productMenu.jsx';
import Header from './components/Header.jsx';

ReactDOM.render(<ProductMenu modelName={'mens-wool-runners'} modelId={1}/>, document.getElementById('accordion-container'));

ReactDOM.render(<Header />, document.getElementById('header-container'));