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
      .then(response => response.json())
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
      .then(response => (response.json()))
      .then(post => dispatch(receivePost(post)));
  };
};

export const createPost = (post) => {
  console.log(post);
  debugger;
  return {
    type: ADD_POST,
    post: post
  };
};

export const createPostAction = (post) => {
  console.log(post);
  debugger;
  return dispatch => {
    addPost(post)
      .then(response => (response.json()))
      .then(postData => {
        console.log(postData);
        debugger;
        const fullPost = {
          ...post,
          voteScore: postData.voteScore,
          deleted: postData.deleted
        };
        dispatch(createPost(fullPost))
      });
  };
};
