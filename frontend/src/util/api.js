
const headers = {
  headers: {
    'Authorization': 'god-god-god'
  }
};

export function fetchCategories() {
  return fetch('http://localhost:3001/categories', headers)
    .then(response => response.json());
}

export function fetchCategories2() {
  return fetch('http://localhost:3001/categories', headers);
}

export function fetchPosts() {
  return fetch('http://localhost:3001/posts', headers);
}

export function fetchCategoryPosts(category) {
  return fetch(`http://localhost:3001/${category}/posts`, headers);
}