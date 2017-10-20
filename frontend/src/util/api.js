
const headers = {
  headers: {
    'Authorization': 'god-god-god'
  }
};

export function fetchCategories() {
  return fetch('http://localhost:3001/categories', headers);
}

export function fetchCategoryPosts(category) {
  if (category) {
    return fetch(`http://localhost:3001/${category}/posts`, headers);
  } else {
    return fetch(`http://localhost:3001/posts`, headers);
  }
}

export function fetchPost(postId) {
  return fetch(`http://localhost:3001/posts/${postId}`, headers);
}

export function fetchComments(postId) {
  return fetch(`http://localhost:3001/posts/${postId}/comments`, headers);
}