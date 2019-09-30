import $ from 'jquery';
import api from './api';

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

  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
  });

  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
