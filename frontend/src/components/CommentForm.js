import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { createCommentAction, editCommentAction } from '../actions/CommentActions';

class CommentForm extends React.Component {

  state = {
    bodyValue: '',
    authorValue: ''
  };

  componentDidMount() {
    if (this.props.comment.body) {
      // We are in edit mode
      this.setState({
        bodyValue: this.props.comment.body,
        authorValue: this.props.comment.author
      });
    }
  }

  saveComment = () => {
    if (this.props.comment.id) {
      // Comment to edit
      const commentEdited = {
        id: this.props.comment.id,
        timestamp: Date.now(),
        body: this.state.bodyValue
      };
      this.props.dispatch(editCommentAction(commentEdited));
    } else {
      const newComment = {
        id: uuid.v1(),
        timestamp: Date.now(),
        body: this.state.bodyValue,
        author: this.state.authorValue,
        parentId: this.props.comment.parentId
      };
      this.props.dispatch(createCommentAction(newComment));
    }
  };

  saveInputValue = (event, inputType) => {
    const value = event.target.value;
    this.setState((state) => ({
      ...state,
      [inputType]: value
    }));
  };

  render() {
    return (
      <div style={{ backgroundColor: 'blue'}}>
        <form>
          <input
            type="text"
            placeholder="Body"
            value={this.state.bodyValue}
            onChange={(event) => this.saveInputValue(event, 'bodyValue')}
          />
          <input
            type="text"
            placeholder="Author"
            value={this.state.authorValue}
            onChange={(event) => this.saveInputValue(event, 'authorValue')}
          />
          <button type="button" onClick={() => this.saveComment()}>Save</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(CommentForm);