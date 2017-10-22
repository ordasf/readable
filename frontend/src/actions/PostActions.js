import {
  fetchCategoryPosts,
  fetchPost,
  addPost
} from '../util/api';

export const RECEIVE_CATEGORY_POSTS = 'RECEIVE_CATEGORY_POSTS';
export const RECEIVE_POST = 'RECEIVE_POSTS';

export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';
export const UPVOTE_POST = 'UPVOTE_POST';
export const DOWNVOTE_POST = 'DOWNVOTE_POST';

export const receiveCategoryPosts = (posts) => {
  return {
    type: RECEIVE_CATEGORY_POSTS,
    posts
  };
};

export const fetchCategoryPostsAction = (category) => {
  return dispatch => {
    fetchCategoryPosts(category)
      .then(posts => dispatch(receiveCategoryPosts(posts)));
  }
};

export const receivePost = (post) => {
  return {
    type: RECEIVE_POST,
    post: [post]
  };
};

export const fetchPostAction = (postId) => {
  return dispatch => {
    fetchPost(postId)
      .then(post => dispatch(receivePost(post)));
  };
};

export const createPost = (post) => {
  return {
    type: ADD_POST,
    post: post
  };
};

export const createPostAction = (post) => {
  return dispatch => {
    addPost(post)
      .then(postData => {
        dispatch(createPost(postData))
      });
  };
};
