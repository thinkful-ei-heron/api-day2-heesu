const BASE_URL = 'https://thinkful-list-api.herokuapp.com/heesu';

const getItems() {
  return fetch(`${BASE_URL}/items`);
};

const createrItem = function(name) {
  let newItem = JSON.stringify({name})
  fetch(`${BASE_URL}/items`, {method: 'POST', 
    header: 'Content-Type': 'application/json',
    body: newItem});
}

export default {
  getItems,
  createItem
};
