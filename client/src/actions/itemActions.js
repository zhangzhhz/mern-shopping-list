import { GET_ITEMS, ADD_ITEM, DELETE_ITEM }  from './types';

const getItems = () => {
  return {
    type: GET_ITEMS,
  };
};
const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};
const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
};

export default {
  getItems,
  addItem,
  deleteItem,
};