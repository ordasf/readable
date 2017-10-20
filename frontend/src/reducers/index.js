import { combineReducers } from 'redux';
import { categories } from './CategoriesReducer';
import { posts } from './PostsReducer';
import { comments } from './CommentsReducer';

export default combineReducers({
  categories,
  posts,
  comments
});
