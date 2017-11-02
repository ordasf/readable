import { combineReducers } from 'redux';
import { categories } from './CategoriesReducer';
import { posts } from './PostsReducer';
import { comments } from './CommentsReducer';
import { currentPost } from './CurrentPostReducer';

export default combineReducers({
  categories,
  posts,
  comments,
  currentPost
});
