import {
  fetchCategories
} from '../util/api';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

export const receiveCategories = ({ categories }) => {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
};

export const fetchCategoriesAction = () => {
  return dispatch => {
    fetchCategories()
      .then(response => response.json())
      .then(categories => dispatch(receiveCategories(categories)));
  };
};
