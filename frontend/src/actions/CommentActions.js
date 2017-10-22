import {
  makeGETRequest
} from '../util/api';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT';
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT';

export const receiveComments = (comments) => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  }
};

export const fetchCommentsAction = (postId) => {
  const query = `posts/${postId}/comments`
  return dispatch => {
    makeGETRequest(query)
      .then(post => dispatch(receiveComments(post)));
  };
};
