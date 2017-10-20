import { combineReducers } from 'redux';

import {
  RECEIVE_CATEGORIES,
  ADD_POST,
  RECEIVE_CATEGORY_POSTS,
  RECEIVE_POST,
  RECEIVE_COMMENTS
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
    case RECEIVE_COMMENTS:
      return [...state, ...action.comments];
    default:
      return state;
  }
}

export default combineReducers({
  categories,
  posts,
  comments
});
