import {
  makeGETRequest
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
    makeGETRequest('categories')
      .then(categories => dispatch(receiveCategories(categories)));
  };
};
