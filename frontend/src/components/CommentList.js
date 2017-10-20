import React from 'react';
import { connect } from 'react-redux';
import { fetchCommentsAction } from '../actions';

class CommentList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchCommentsAction());
  }

  render() {
    return (
      <div>
        {
          this.props.comments.map(comment => (
            <div>
              <p>{comment.body} by {comment.author}</p>
            </div>
          ))
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
