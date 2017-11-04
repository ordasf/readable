import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import {
  fetchCategoryPostsAction,
  sortPostsByTimeAction,
  sortPostsByTimeScore,
  upVotePostAction,
  downVotePostAction
} from '../actions/index';
import PostForm from './PostForm';
import { convertDate } from '../util/helper';
import { deletePostAction } from '../actions/PostActions';

class PostList extends React.Component {

  state = {
    showPostForm: false,
    orderType: 'scoreSort',
    currentCategory: null,
    postToEdit: {},
    editMode: false
  };

  componentDidMount() {
    const { category } = this.props.match.params;
    this.setState(state => ({
      ...state,
      currentCategory: category ? category : null
    }));
    this.props.dispatch(fetchCategoryPostsAction(category));
  }

  componentWillReceiveProps(nextProps) {
    let category = nextProps.match.params.category;
    category = category ? category : null;
    if (this.state.currentCategory !== category) {
      this.setState(state => ({
        ...state,
        currentCategory: category
      }));
      this.props.dispatch(fetchCategoryPostsAction(category));
    }
  }

  changeSorting = (event) => {
    const sortMethod = event.target.value;
    if (sortMethod === 'timeSort') {
      this.props.dispatch(sortPostsByTimeAction(this.props.posts));
    } else {
      this.props.dispatch(sortPostsByTimeScore(this.props.posts));
    }
  };

  addPost = () => {
    this.setState(state => ({
      ...state,
      showPostForm: true,
      postToEdit: {},
      editMode: false
    }));
  };

  editPost = (post) => {
    this.setState(state => ({
      ...state,
      showPostForm: true,
      postToEdit: post,
      editMode: true
    }));
  };

  closePostFormModal = () => {
    this.setState(state => ({
      ...state,
      showPostForm: false,
      postToEdit: {},
      editMode: false
    }));
  };

  deletePost = (postId) => {
    this.props.dispatch(deletePostAction(postId));
  };

  upVotePost = (postId) => {
    this.props.dispatch(upVotePostAction(postId));
  };

  downVotePost = (postId) => {
    this.props.dispatch(downVotePostAction(postId));
  };

  render() {
    return (
      <div>
        <button onClick={this.addPost}>Add post</button>
        <select defaultValue={this.state.orderType} onChange={(event) => this.changeSorting(event)}>
          <option value="timeSort">Sort by Time</option>
          <option value="scoreSort">Sort by Score</option>
        </select>
        <Modal isOpen={this.state.showPostForm} style={modalStyles}>
          <PostForm
            editMode={this.state.editMode}
            post={this.state.postToEdit}
            closePostFormModal={this.closePostFormModal}
          />
        </Modal>
        {
          this.props.posts.map((post) => (
              <div key={post.id} style={postListElementStyle}>
                <h3><Link to={`/${post.category}/${post.id}`}>{post.title}</Link></h3>
                <h5>{post.author}</h5>
                <p>voteScore: {post.voteScore}</p>
                <p>{convertDate(post.timestamp)}</p>
                <p>Number of Comments: {post.commentCount}</p>
                <button onClick={() => this.editPost(post)}>Edit</button>
                <button onClick={() => this.deletePost(post.id)}>Delete</button>
                <button onClick={() => this.upVotePost(post.id)}>Upvote</button>
                <button onClick={() => this.downVotePost(post.id)}>Downvote</button>
              </div>
            )
          )
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

const modalStyles = {
  overlay: {},
  content: { textAlign: 'center' }
};

const postListElementStyle = {
  backgroundColor: 'gainsboro'
};

export default connect(mapStateToProps)(PostList);