import { makeGETRequest } from '../util/api';

export const RECEIVE_POST = 'RECEIVE_POST';

export const receivePost = (post) => {
  return {
    type: RECEIVE_POST,
    post: [post]
  };
};

export const fetchPostAction = (postId) => {
  const query = `posts/${postId}`;
  return dispatch => {
    makeGETRequest(query)
      .then(post => dispatch(receivePost(post)));
  };
};