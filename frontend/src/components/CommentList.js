import React from 'react';
import { connect } from 'react-redux';
import { fetchCommentsAction } from '../actions';
import CommentForm from './CommentForm';

class CommentList extends React.Component {

  state = {
    showCommentForm: false
  };

  componentDidMount() {
    this.props.dispatch(fetchCommentsAction(this.props.post.id));
  }

  toggleCommentForm = () => {
    const { showCommentForm } = this.state;
    this.setState({ showCommentForm: !showCommentForm });
  };

  render() {
    return (
      <div style={{backgroundColor: 'red'}}>
        <button onClick={() => this.toggleCommentForm()}>Add comment</button>
        {
          this.props.comments.map(comment => (
            <div key={comment.id}>
              <h2>{comment.body}</h2>
              <p>by <b>{comment.author}</b> at {comment.timestamp}</p>
              <p>Vote Score: {comment.voteScore}</p>
              <button>Edit</button>
              <button>Delete</button>
              <button>Upvote</button>
              <button>Downvote</button>
            </div>
          ))
        }
        {
          this.state.showCommentForm && (<CommentForm postId={this.props.postId}/>)
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
