import React from 'react';
import { connect } from 'react-redux';
import { fetchPostAction, deletePostAction } from '../actions/index';
import PostForm from './PostForm';
import CommentList from './CommentList';

class PostDetail extends React.Component {

  state = {
    showEditPostForm: false
  };

  componentDidMount() {
    this.props.dispatch(fetchPostAction(this.props.match.params.postId));
  }

  showEditPostForm = () => {
    this.setState({
      showEditPostForm: true
    });
  };

  deletePost = () => {
    this.props.dispatch(deletePostAction(this.props.posts[0].id));
  };

  render() {
    return (
      <div style={{backgroundColor: 'darksalmon'}}>
        {
          this.props.posts.map(post => (
            <div key={post.id}>
              <p>{post.title} by {post.author} at {post.timestamp}</p>
              <p>{post.body}</p>
              <p>Score: {post.voteScore}</p>
              <button onClick={this.showEditPostForm}>Edit</button>
              <button onClick={() => {this.deletePost()}}>Delete</button>
              {
                this.state.showEditPostForm && <PostForm/>
              }
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