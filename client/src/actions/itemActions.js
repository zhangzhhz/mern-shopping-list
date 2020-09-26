import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

const getItems = (items) => {
  return {
    type: GET_ITEMS,
    payload: items
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
const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
};

export default {
  getItems,
  addItem,
  deleteItem,
  setItemsLoading,
};