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

//api.createItem('pears')
//  .then(res => res.json())
//  .then((newItem) => {
//    return api.getItems();
//  })
//  .then(res => res.json())
//  .then((items) => {
//    console.log(items);
//  });
// console.log(api.BASE_URL);

api.getItems()
  .then(res => res.json())
  .then((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });

api.getItems()
  .then(res => res.json())
  .then((items) => {
    const item = items[0];
    return api.updateItem(item.id, { name: 'foobar' });
  })
  .then(res => res.json())
  .then(() => console.log('updated!'));

//  const item = store.items[0];
//  console.log('current name: ' + item.name);
//  store.findAndUpdate(item.id, { name: 'foobar' });
//  console.log('new name: ' + item.name);

  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
