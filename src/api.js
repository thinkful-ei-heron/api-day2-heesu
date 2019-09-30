const BASE_URL = 'https://thinkful-list-api.herokuapp.com/heesu';

const getItems = function() {
  return fetch(`${BASE_URL}/items`);
};

const createItem = function(name) {
  let newItem = JSON.stringify(name)
  return fetch(`${BASE_URL}/items`, {
    method: 'POST', 
    header: {'Content-Type': 'application/json'},
    body: newItem});
};

const updateItem = function(id, updateData) {
  return fetch(`${BASE_URL}/items/${id}`,{
    method: 'PACTH',
    header: {'Content-Type': 'application/json'},
    body: JSON.stringify(updateData)
  });
};

const deleteItem = function(id) {
  return fetch(`${BASE_URL}/items/${id}`), {
    method: 'DELETE',
    header: {'Content-Type': 'application/json'},
  };
};

const checkError = function(...args) {
  let error;
  return fetch(...args)
    .then(res => {
      if(!res.ok) {
        error={code: res.status};
      }
      return res.json();
    })
    .then(resJson => {
      if(error) {
        error.message=resJson.message;
        return Promise.reject(error);
      }
      return resJson;
    });
};

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem,
  checkError 
};
