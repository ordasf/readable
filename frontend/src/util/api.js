
const headers = {
  headers: {
    'Authorization': 'god-god-god',
    'Content-Type': 'application/json'
  }
};

const SERVER_URL = 'http://localhost:3001';

export function fetchCategories() {
  return fetch(`${SERVER_URL}/categories`, headers)
    .then(response => (response.json()));
}

export function fetchCategoryPosts(category) {
  if (category) {
    return fetch(`${SERVER_URL}/${category}/posts`, headers)
      .then(response => (response.json()));
  } else {
    return fetch(`${SERVER_URL}/posts`, headers)
      .then(response => (response.json()));
  }
}

export function fetchPost(postId) {
  return fetch(`${SERVER_URL}/posts/${postId}`, headers)
    .then(response => (response.json()));
}

export function fetchComments(postId) {
  return fetch(`${SERVER_URL}/posts/${postId}/comments`, headers)
    .then(response => (response.json()));
}

export function addPost(post) {
  const init = {
    method: 'POST',
    headers: headers.headers,
    body: JSON.stringify(post)
  };
  return fetch(`${SERVER_URL}/posts`, init)
    .then(response => (response.json()));
}