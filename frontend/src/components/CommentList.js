import React from 'react';
import { connect } from 'react-redux';
import { fetchCommentsAction } from '../actions';
import CommentForm from './CommentForm';

class CommentList extends React.Component {

  state = {
    showCommentForm: false
  };

  componentDidMount() {
    this.props.dispatch(fetchCommentsAction());
  }

  toggleCommentForm = () => {
    const { showCommentForm } = this.state;
    this.setState({ showCommentForm: !showCommentForm });
  };

  render() {
    return (
      <div style={{backgroundColor: 'red'}}>
        {
          this.props.comments.map(comment => (
            <div>
              <p>{comment.body} by {comment.author}</p>
            </div>
          ))
        }
        <button onClick={() => this.toggleCommentForm()}>Add comment</button>
        {
          this.state.showCommentForm && (<CommentForm/>)
        }
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}

export default connect(mapStateToProps)(CommentList);
