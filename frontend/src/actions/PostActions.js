import {
  makeGETRequest,
  makePOSTRequest,
  makeDELETERequest
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
  let query = '';
  if (category) {
    query = `${category}/posts`
  } else {
    query = `posts`
  }
  return dispatch => {
    makeGETRequest(query)
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
  const query = `posts/${postId}`;
  return dispatch => {
    makeGETRequest(query)
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
    makePOSTRequest('posts', post)
      .then(postData => {
        dispatch(createPost(postData))
      });
  };
};

export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    postId
  };
};

export const deletePostAction = (postId) => {
  return dispatch => {
    makeDELETERequest(`posts/${postId}`)
      .then(() => {
        dispatch(deletePost(postId));
      });
  }
};

export const upVotePost = (post) => {
  return {
    type: UPVOTE_POST,
    post
  };
};

export const upVotePostAction = (postId) => {
  return dispatch => {
    makePOSTRequest(`posts/${postId}`, { option: 'upVote'})
      .then(post => dispatch(upVotePost(post)));
  };
};

export const downVotePost = (post) => {
  return {
    type: DOWNVOTE_POST,
    post
  };
};

export const downVotePostAction = (postId) => {
  return dispatch => {
    makePOSTRequest(`posts/${postId}`, { option: 'upVote'})
      .then(post => dispatch(downVotePost(post)));
  };
};
