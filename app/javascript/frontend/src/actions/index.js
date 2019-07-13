export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const POST_CREATED = 'POST_CREATED';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
const API_KEY = 'LEWAGON-BLOG';
// old api request code: fetch(`${ROOT_URL}?key=${API_KEY}`)

export function fetchPosts() {
  const promise = fetch('/api/v1/posts')
  .then(response => response.json());

  return {
    type: FETCH_POSTS,
    payload: promise
  };
}

export function fetchPost(id) {
  const promise = fetch(`/api/v1/posts/${id}`)
  .then(response => response.json());

  return {
    type: FETCH_POST,
    payload: promise
  };
}

export function createPost(body, callback) {
  const csrf = document.querySelector("meta[name=csrf-token]").getAttribute("content");
  const request = fetch('/api/v1/posts', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrf
    },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback);

  return {
    type: POST_CREATED,
    payload: request
  };
}
