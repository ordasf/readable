
const headers = {
  headers: {
    'Authorization': 'god-god-god',
    'Content-Type': 'application/json'
  }
};

const SERVER_URL = 'http://localhost:3001';

export function fetchComments(postId) {
  return fetch(`${SERVER_URL}/posts/${postId}/comments`, headers)
    .then(response => (response.json()));
}

export function makeGETRequest(query) {
  return fetch(`${SERVER_URL}/${query}`, headers)
    .then(response => (response.json()));
}

export function makePOSTRequest(query, body) {
  const init = {
    method: 'POST',
    headers: headers.headers,
    body: JSON.stringify(body)
  };
  return fetch(`${SERVER_URL}/${query}`, init)
    .then(response => (response.json()));
}

export function makePUTRequest(query, body) {
  const init = {
    method: 'PUT',
    headers: headers.headers,
    body: JSON.stringify(body)
  };
  return fetch(`${SERVER_URL}/${query}`, init)
    .then(response => (response.json()));
}

export function makeDELETERequest(query) {
  const init = {
    method: 'DELETE',
    headers: headers.headers,
  };
  return fetch(`${SERVER_URL}/${query}`, init)
    .then(response => (response.json()));
}
