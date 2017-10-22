
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

export function addPost(post) {
  const init = {
    method: 'POST',
    headers: headers.headers,
    body: JSON.stringify(post)
  };
  /*let urlParams = '';
  const paramsObject = Object.entries(post);
  for (const param of paramsObject) {
    urlParams = `${urlParams}&${param[0]}=${param[1]}`;
  }
  urlParams = urlParams.slice(1);
  console.log(`http://localhost:3001/posts?${urlParams}`);*/
  debugger;
  return fetch(`http://localhost:3001/posts`, init);
}