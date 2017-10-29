import React from 'react';
import { connect } from 'react-redux';
import {
  fetchCommentsAction,
  deleteCommentAction,
  upVoteCommentAction,
  downVoteCommentAction
} from '../actions';
import CommentForm from './CommentForm';

class CommentList extends React.Component {

  state = {
    showCommentForm: false,
    formComment: {}
  };

  componentDidMount() {
    this.props.dispatch(fetchCommentsAction(this.props.post.id));
  }

  toggleCommentForm = () => {
    const { showCommentForm } = this.state;
    this.setState({
      showCommentForm: !showCommentForm,
      formComment: { parentId: this.props.post.id }
    });
  };

  showEditCommentForm = (comment) => {
    const { showCommentForm } = this.state;
    this.setState({
      showCommentForm: !showCommentForm,
      formComment: comment
    });
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

  render() {
    return (
      <div style={{backgroundColor: 'red'}}>
        <button onClick={() => this.toggleCommentForm()}>Add comment</button>
        {
          this.state.showCommentForm && (<CommentForm comment={this.state.formComment}/>)
        }
        {
          this.props.comments.map(comment => (
            <div key={comment.id}>
              <h1>{comment.id}</h1>
              <h2>{comment.body}</h2>
              <p>by <b>{comment.author}</b> at {comment.timestamp}</p>
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

export default connect(mapStateToProps)(CommentList);
