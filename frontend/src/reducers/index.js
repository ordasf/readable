import { combineReducers } from 'redux';

import {
  RECEIVE_CATEGORIES,
  ADD_POST,
  ADD_COMMENT,
  RECEIVE_CATEGORY_POSTS,
  RECEIVE_POST
} from '../actions';

function categories(state = [], action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return [...state, ...action.categories];
    default:
      return state;
  }
}

function posts(state = [], action) {
  switch (action.type) {
    case RECEIVE_CATEGORY_POSTS:
      return [...state, ...action.posts];
    case RECEIVE_POST:
      return action.post
    case ADD_POST:
      return state;
    default:
      return state;
  }
}

function comments(state = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      return state;
    default:
      return state;
  }
}

export default combineReducers({
  categories,
  posts,
  comments
});
