import { combineReducers } from 'redux';

import {
  RECEIVE_CATEGORIES,
  RECEIVE_ALL_POSTS,
  ADD_POST,
  ADD_COMMENT
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
    case RECEIVE_ALL_POSTS:
      debugger;
      return [...state, ...action.posts];
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
