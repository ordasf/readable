import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import {
  fetchCommentsAction,
  deleteCommentAction,
  upVoteCommentAction,
  downVoteCommentAction,
  sortCommentsByScore,
  sortCommentsByTime
} from '../actions';
import CommentForm from './CommentForm';
import { convertDate } from '../util/helper';

class CommentList extends React.Component {

  state = {
    showCommentForm: false,
    formComment: {},
    sortType: 'scoreSort'
  };

  componentDidMount() {
    this.props.dispatch(fetchCommentsAction(this.props.postId));
  }

  toggleCommentForm = () => {
    this.setState(state => ({
      ...state,
      showCommentForm: !state.showCommentForm,
      formComment: { parentId: this.props.post.id }
    }));
  };

  showEditCommentForm = (comment) => {
    this.setState(state => ({
      ...state,
      showCommentForm: !state.showCommentForm,
      formComment: comment
    }));
  };

  closeCommentFormModal = () => {
    this.setState(state => ({
      ...state,
      showCommentForm: false
    }));
  };

  deleteComment = (commentId) => {
    this.props.dispatch(deleteCommentAction(commentId));
  };

  upVoteComment = (commentId) => {
    this.props.dispatch(upVoteCommentAction(commentId));
  };

  downVoteComment = (commentId) => {
    this.props.dispatch(downVoteCommentAction(commentId));
  };

  changeSortOrder = (newSortType) => {
    this.sortComments(newSortType);
    this.setState(state => ({
      ...state,
      sortType: newSortType
    }));
  };

  sortComments = (sortType) => {
    if (sortType === 'timeSort') {
      this.props.dispatch(sortCommentsByTime(this.props.comments));
    } else {
      this.props.dispatch(sortCommentsByScore(this.props.comments));
    }
  };

  render() {
    return (
      <div style={{backgroundColor: 'white'}}>
        <button onClick={() => this.toggleCommentForm()}>Add comment</button>
        <select defaultValue={this.state.sortType} onChange={(event) => this.changeSortOrder(event.target.value)}>
          <option value="timeSort">Sort by Time</option>
          <option value="scoreSort">Sort by Score</option>
        </select>
        <Modal isOpen={this.state.showCommentForm} style={modalStyles}>
          <CommentForm comment={this.state.formComment} closeCommentFormModal={this.closeCommentFormModal}/>
        </Modal>
        {
          this.props.comments.map(comment => (
            <div key={comment.id} style={{backgroundColor: 'red'}}>
              <h2>{comment.body}</h2>
              <p>by <b>{comment.author}</b> at {convertDate(comment.timestamp)}</p>
              <p>Vote Score: {comment.voteScore}</p>
              <button onClick={() => this.showEditCommentForm(comment)}>Edit</button>
              <button onClick={() => this.deleteComment(comment.id)}>Delete</button>
              <button onClick={() => this.upVoteComment(comment.id)}>Upvote</button>
              <button onClick={() => this.downVoteComment(comment.id)}>Downvote</button>
            </div>
          ))
        }
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    post: state.posts[0],
    comments: state.comments
  };

}

const modalStyles = {
  overlay: {},
  content: { textAlign: 'center' }
};

export default connect(mapStateToProps)(CommentList);
