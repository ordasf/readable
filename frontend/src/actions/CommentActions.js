import {
  makeGETRequest,
  makePOSTRequest,
  makeDELETERequest,
  makePUTRequest
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

export const editComment = (comment) => {
  return {
    type: EDIT_COMMENT,
    comment
  }
};

export const editCommentAction = (comment) => {
  return dispatch => {
    makePUTRequest(`comments/${comment.id}`, comment)
      .then(comment => {
        dispatch(editComment(comment));
      });
  }
};

export const deleteComment = (commentId) => {
  return {
    type: DELETE_COMMENT,
    commentId
  }
};

export const deleteCommentAction = (commentId) => {
  return dispatch => {
    makeDELETERequest(`comments/${commentId}`)
      .then(comment => {
        dispatch(deleteComment(comment.id));
      });
  }
};

export const upVoteComment = (comment) => {
  return {
    type: UPVOTE_COMMENT,
    comment
  }
};

export const upVoteCommentAction = (commentId) => {
  return dispatch => {
    makePOSTRequest(`comments/${commentId}`, { option: 'upVote'})
      .then(comment => {
        dispatch(upVoteComment(comment));
      });
  }
};

export const downVoteComment = (comment) => {
  return {
    type: DOWNVOTE_COMMENT,
    comment
  }
};

export const downVoteCommentAction = (commentId) => {
  return dispatch => {
    makePOSTRequest(`comments/${commentId}`, { option: 'downVote'})
      .then(comment => {
        dispatch(downVoteComment(comment));
      });
  }
};
