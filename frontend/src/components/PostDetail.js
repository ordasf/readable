import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import {
  fetchPostAction,
  deletePostAction,
  upVotePostAction,
  downVotePostAction
} from '../actions/index';
import PostForm from './PostForm';
import CommentList from './CommentList';
import { convertDate } from '../util/helper';

class PostDetail extends React.Component {

  state = {
    showEditPostForm: false
  };

  componentDidMount() {
    this.props.dispatch(fetchPostAction(this.props.match.params.postId));
  }

  togglePostFormModal = () => {
    const showEditPostForm = this.state.showEditPostForm;
    this.setState({
      showEditPostForm: !showEditPostForm
    });
  };

  deletePost = () => {
    this.props.dispatch(deletePostAction(this.props.currentPost.id));
    this.props.history.goBack();
  };

  upVotePost = () => {
    this.props.dispatch(upVotePostAction(this.props.currentPost.id));
  };

  downVotePost = () => {
    this.props.dispatch(downVotePostAction(this.props.currentPost.id));
  };

  render() {
    const post = this.props.currentPost;
    return (
      <div>
        <div key={post.id} style={{backgroundColor: 'darksalmon'}}>
          <h1>{post.title}</h1>
          <h3>{post.body}</h3>
          <p>created by <b>{post.author}</b> at <b>{convertDate(post.timestamp)}</b></p>
          <p>Score: {post.voteScore}</p>
          <p>Number of comments: {this.props.comments.length}</p>
          <button onClick={this.togglePostFormModal}>Edit</button>
          <button onClick={() => this.deletePost()}>Delete</button>
          <button onClick={() => this.upVotePost()}>Upvote</button>
          <button onClick={() => this.downVotePost()}>Downvote</button>
          <Modal isOpen={this.state.showEditPostForm} style={modalStyles}>
            <PostForm
              editMode={true}
              post={post}
              closePostFormModal={this.togglePostFormModal}/>
          </Modal>
          <CommentList postId={post.id}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
    currentPost: state.currentPost
  }
}

const modalStyles = {
  overlay: {},
  content: { textAlign: 'center' }
};

export default connect(mapStateToProps)(PostDetail);