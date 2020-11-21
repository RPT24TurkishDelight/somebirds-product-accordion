import React from 'react';
import ReactDOM from 'react-dom';
import ProductMenu from '../client/components/productMenu.jsx';
import Accordion from '../client/components/Accordion.jsx';
import ItemList from '../client/components/ItemList.jsx';
import request from "supertest";
import { mount, shallow } from 'enzyme';
import 'babel-polyfill'

describe ('components render to page', () => {

  test('renders whole accordion without crashing', function() {
    const div = document.createElement('div');
    ReactDOM.render(<ProductMenu />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders accordion section with crashing', function() {
    const div = document.createElement('div');
    ReactDOM.render(<Accordion />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders item list with crashing', function() {
    const div = document.createElement('div');
    ReactDOM.render(<ItemList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});

describe('Product Menu', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ProductMenu modelName={'mens-wool-runners'}/>);
  });

  test('Renders 4 accordion components', function() {
    expect(wrapper.find(Accordion)).toHaveLength(4);
  });

  test('passes down the correct state for opened section', function() {
    expect(wrapper.find(Accordion).at(0).props().openedSectionId).toEqual(null);
    expect(wrapper.find(Accordion).at(1).props().openedSectionId).toEqual(null);
    expect(wrapper.find(Accordion).at(2).props().openedSectionId).toEqual(null);
    expect(wrapper.find(Accordion).at(3).props().openedSectionId).toEqual(null);
  });

  test('changes the state for an openId when a piece of the accordion is clicked', () => {
    wrapper = mount(<ProductMenu modelName={'mens-wool-runners'}/>);
    let button = wrapper.find('.accordion').at(0);
    button.simulate('click');
    expect(wrapper.find(Accordion).at(1).props().openedSectionId).toEqual(1);
  });

});

// describe('API requests', () => {

//   test('returns the correct dat from an API request', async function() {
//     await request(app)
//       .get('/products/mens-wool-runners/summary')
//       .then(response => {
//         expect(response.statusCode).toBe(200);
//       });
//   });

// });



