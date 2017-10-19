import React from 'react';
import { connect } from 'react-redux';
import { fetchAllPosts, fetchCategoryPostsAction } from '../actions/index';
import Post from './Post';

class PostList extends React.Component {

  componentDidMount() {
    const { category } = this.props.match.params;
    if (category) {
      this.props.dispatch(fetchCategoryPostsAction(category));
    } else {
      this.props.dispatch(fetchAllPosts());
    }
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.posts.map((post) => {
              return (
                <div><li key={post.id}>{post.author} - {post.body}</li><Post/></div>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(PostList);