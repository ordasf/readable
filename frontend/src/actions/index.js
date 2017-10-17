import { fetchCategories2, fetchPosts } from '../util/api';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';
export const UPVOTE_POST = 'UPVOTE_POST';
export const DOWNVOTE_POST = 'DOWNVOTE_POST';

export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT';
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT';

export const receiveCategories = ({ categories }) => {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
};

export const fetchCategories = () => {
  return dispatch => {
    fetchCategories2()
      .then(response => response.json())
      .then(categories => dispatch(receiveCategories(categories)));
  };
};

export const receiveAllPosts = (posts) => {
  return {
    type: RECEIVE_ALL_POSTS,
    posts
  }
}

export const fetchAllPosts = () => {
  return dispatch => {
    fetchPosts()
      .then(response => response.json())
      .then(posts => dispatch(receiveAllPosts(posts)));
  }
}
