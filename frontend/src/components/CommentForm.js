import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { createCommentAction} from '../actions/CommentActions';

class CommentForm extends React.Component {

  state = {
    bodyValue: '',
    authorValue: ''
  };

  saveComment = () => {
    const { body, author } = this.state;
    const newComment = {
      id: uuid.v1(),
      timestamp: Date.now(),
      body,
      author,
      parentId: 1 // TODO
    };
    debugger;
    this.props.dispatch(createCommentAction(newComment));
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
          <input placeholder="Body" onChange={(event) => this.saveInputValue(event, 'bodyValue')}/>
          <input placeholder="Author" onChange={(event) => this.saveInputValue(event, 'authorValue')} />
          <button onClick={() => this.saveComment()}>Add Comment</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
 return state;
}

export default connect(mapStateToProps)(CommentForm);