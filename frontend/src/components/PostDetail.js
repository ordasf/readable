import React from 'react';
import { connect } from 'react-redux';
import { fetchPostAction } from '../actions/index';

class PostDetail extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchPostAction(this.props.match.params.postId));
  }

  render() {
    const post = this.props.post;
    return (
      <div>
        {
          this.props.posts.map(post => (
            <div>
              <p>{post.title}</p>
              <p>by {post.author}</p>
              <p>{post.body}</p>
              <p>written: {post.timestamp}</p>
              <p>Score: {post.voteScore}</p>
            </div>
          ))
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

export default connect(mapStateToProps)(PostDetail);