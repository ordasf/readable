import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { createPostAction, updatePostAction } from '../actions/PostActions';

class PostForm extends React.Component {

  state = {
    titleValue: '',
    bodyValue: '',
    authorValue: '',
    categoryValue: ''
  };

  componentDidMount() {
    // Populate the form only if we are in editing mode
    if (this.props.editMode) {
      const post = this.props.post;
      this.setState({
        titleValue: post.title,
        bodyValue: post.body,
        authorValue: post.author,
        categoryValue: post.category
      });
    }
  }

  savePost = () => {
    const { titleValue, bodyValue, authorValue, categoryValue } = this.state;
    if (titleValue === '' || bodyValue === '' || authorValue === '' || categoryValue === '') {
      console.log('Missing values');
      return;
    }
    if (this.props.editMode) {
      const updatedPost = {
        title: titleValue,
        body: bodyValue,
      };
      this.props.dispatch(updatePostAction(this.props.currentPost.id, updatedPost));
    } else {
      const newPost = {
        id: uuid.v1(),
        timestamp: Date.now(),
        title: titleValue,
        body: bodyValue,
        author: authorValue,
        category: categoryValue
      };
      this.props.dispatch(createPostAction(newPost));
    }
    this.props.closePostFormModal();
  };

  updateInputValue = (event, input) => {
    const newValue = event.target.value;
    this.setState((state) => ({
      ...state,
      [input]: newValue
    }))
  };

  updateSelect = (event) => {
    const newValue = event.target.value;
    this.setState((state) => ({
      ...state,
      categoryValue: newValue
    }))
  };

  render() {
    return (
      <div style={{}}>
        <form>
          <p><input
            label="title"
            type="text"
            placeholder="Title"
            value={this.state.titleValue}
            onChange={event => {this.updateInputValue(event, 'titleValue')}}
          /></p>
          <p><input
            label="body"
            type="text"
            placeholder="Body"
            value={this.state.bodyValue}
            onChange={event => {this.updateInputValue(event, 'bodyValue')}}
          /></p>
          <p><input
            label="author"
            type="text"
            placeholder="Author"
            value={this.state.authorValue}
            disabled={this.props.editMode}
            onChange={event => {this.updateInputValue(event, 'authorValue')}}
          /></p>
          <p><select
            value={this.state.categoryValue}
            onChange={(event) => {this.updateSelect(event)}}
            disabled={this.props.editMode}
          >
            <option value="">-</option>
            {this.props.categories.map(category => (
              <option key={category.path} value={category.path}>{category.name}</option>
            ))}
          </select></p>
          <button type="button" onClick={this.savePost}>Save</button>
          <button type="button" onClick={() => this.props.closePostFormModal()}>Cancel</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
    currentPost: state.currentPost
  };
}

export default connect(mapStateToProps)(PostForm);
