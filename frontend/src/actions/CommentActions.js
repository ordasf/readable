import {
  makeGETRequest, makePOSTRequest
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
  return dispatch => {
    makeGETRequest(`posts/${postId}/comments`)
      .then(comments => dispatch(receiveComments(comments)));
  };
};

export const createComment = (comment) => {
  return {
    type: ADD_COMMENT,
    comment
  }
};

export const createCommentAction = (comment) => {
  return dispatch => {
    makePOSTRequest('comments', comment)
      .then(comment => {
        dispatch(createComment(comment));
      });
  }
};
