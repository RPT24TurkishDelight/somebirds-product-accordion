import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import ProductMenu from '../client/components/productMenu.jsx';
import Accordian from '../client/components/accordian.jsx';
import ItemList from '../client/components/ItemList.jsx';
//will not work with react 17 --> not sure how to replace for testing
import { mount, shallow } from 'enzyme';

describe ('components render to page', () => {

  test('renders whole accordion without crashing', function() {
    const div = document.createElement('div');
    ReactDOM.render(<ProductMenu />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders accordion section with crashing', function() {
    const div = document.createElement('div');
    ReactDOM.render(<Accordian />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders item list with crashing', function() {
    const div = document.createElement('div');
    ReactDOM.render(<ItemList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  });

describe('Product Menu', () => {
  test('Renders 4 accordion components', function() {
    let testRenderer = TestRenderer.create(<ProductMenu modelName={'mens-wool-runners'}/>);
    let testInstance = testRenderer.root;
    expect(testInstance.findAllByType(Accordian).length).toEqual(4);
  });

});


