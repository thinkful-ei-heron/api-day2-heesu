import $ from 'jquery';
import api from '/api';

import 'normalize.css';
import './index.css';

import shoppingList from './shopping-list';

const main = function () {
//fetch('https://thinkful-list-api.herokuapp.com/ei-student/items')
//  .then(res => res.json())
//  .then(data => console.log(data));

//api.getItems()
//  .then(res => console.log(res));
//  console.log(api.BASE_URL);

//api.getItems()
//  .then(res => res.json())
//  .then(res => console.log(res));

api.createItem('pears')
  .then(res => res.json())
  .then((newItem) => {
    return api.getItems();
  })
  .then(res => res.json())
  .then((items) => {
    console.log(items);
  });

  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
