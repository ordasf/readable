import React from 'react';
import { connect } from 'react-redux';
import { fetchCategoryPostsAction } from '../actions/index';
import Post from './Post';

class PostList extends React.Component {

  componentDidMount() {
    const { category } = this.props.match.params;
    this.props.dispatch(fetchCategoryPostsAction(category));
  }

  render() {
    return (
      <div>
        {
          this.props.posts.map((post) => {
            return (
              <div key={post.id}>
                <h3><a href={`${post.category}/${post.id}`}>{post.title}</a></h3>
                <h5>{post.author}</h5>
              </div>
            );
          })
        }
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