import React from 'react';
import ReactDOM from 'react-dom';
import ProductMenu from './components/productMenu.jsx';
import accordionStyles from './accordionStyles.module.css'

ReactDOM.render(<ProductMenu modelName={'mens-wool-runners'} modelId={1}/>, document.getElementById('summary'));