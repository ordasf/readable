import React from 'react';
import { connect } from 'react-redux';
import { fetchPostAction } from '../actions/index';
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
              <button>Delete</button>
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