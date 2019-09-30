const BASE_URL = 'https://thinkful-list-api.herokuapp.com/heesu';

const getItems = function() {
  return fetch(`${BASE_URL}/items`);
};

const createItem = function(name) {
  let newItem = JSON.stringify(name)
  return fetch(`${BASE_URL}/items`, {method: 'POST', 
    header: {'Content-Type': 'application/json'},
    body: newItem});
};

const updateItem = function(id, updateData) {
  return fetch(`${BASE_URL}/items/${id}`,{
    method: 'PACTH',
    header: {'Content-Type': 'application/json'},
    body: JSON.stringify(updateData)
  });
}

export default {
  getItems,
  createItem,
  updateItem
};
