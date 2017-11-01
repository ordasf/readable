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

class PostList extends React.Component {

  state = {
    showAddPostForm: false,
    orderType: 'scoreSort'
  };

  componentDidMount() {
    const { category } = this.props.match.params;
    this.props.dispatch(fetchCategoryPostsAction(category));
  }

  togglePostFormModal = () => {
    const showAddPostForm = this.state.showAddPostForm;
    this.setState({
      showAddPostForm: !showAddPostForm
    });
  };

  changeSorting = (event) => {
    const sortMethod = event.target.value;
    if (sortMethod === 'timeSort') {
      this.props.dispatch(sortPostsByTimeAction(this.props.posts));
    } else {
      this.props.dispatch(sortPostsByTimeScore(this.props.posts));
    }
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
        <button onClick={this.togglePostFormModal}>Add post</button>
        <select defaultValue={this.state.orderType} onChange={(event) => this.changeSorting(event)}>
          <option value="timeSort">Sort by Time</option>
          <option value="scoreSort">Sort by Score</option>
        </select>
        <Modal
          isOpen={this.state.showAddPostForm}
          style={modalStyles}
        >
          <PostForm editMode={false} togglePostFormModal={this.togglePostFormModal}/>
        </Modal>
        {
          this.props.posts.map((post) => {
            return (
              <div key={post.id} style={postListElementStyle}>
                <h3><Link to={`/${post.category}/${post.id}`}>{post.title}</Link></h3>
                <h5>{post.author}</h5>
                <p>voteScore: {post.voteScore}</p>
                <p>{convertDate(post.timestamp)}</p>
                <button onClick={() => this.upVotePost(post.id)}>Upvote</button>
                <button onClick={() => this.downVotePost(post.id)}>Downvote</button>
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

const modalStyles = {
  overlay: {},
  content: { textAlign: 'center' }
};

const postListElementStyle = {
  backgroundColor: 'gainsboro'
};

export default connect(mapStateToProps)(PostList);