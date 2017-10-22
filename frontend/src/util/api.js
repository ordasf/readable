
const headers = {
  headers: {
    'Authorization': 'god-god-god',
    'Content-Type': 'application/json'
  }
};

const SERVER_URL = 'http://localhost:3001';

export function fetchCategories() {
  return fetch(`${SERVER_URL}/categories`, headers);
}

export function fetchCategoryPosts(category) {
  if (category) {
    return fetch(`${SERVER_URL}/${category}/posts`, headers);
  } else {
    return fetch(`${SERVER_URL}/posts`, headers);
  }
}

export function fetchPost(postId) {
  return fetch(`${SERVER_URL}/posts/${postId}`, headers);
}

export function fetchComments(postId) {
  return fetch(`${SERVER_URL}/posts/${postId}/comments`, headers);
}

export function addPost(post) {
  const init = {
    method: 'POST',
    headers: headers.headers,
    body: JSON.stringify(post)
  };
  return fetch(`${SERVER_URL}/posts`, init);
}