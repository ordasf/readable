import React from 'react';
import { connect } from 'react-redux';
import { fetchPostAction } from '../actions/index';
import CommentList from './CommentList';

class PostDetail extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchPostAction(this.props.match.params.postId));
  }

  render() {
    return (
      <div>
        {
          this.props.posts.map(post => (
            <div key={post.id}>
              <p>{post.title} by {post.author} at {post.timestamp}</p>
              <p>{post.body}</p>
              <p>Score: {post.voteScore}</p>
              <CommentList/>
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