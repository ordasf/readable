import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { createPostAction } from '../actions/PostActions';

class PostForm extends React.Component {

  state = {
    titleValue: '',
    bodyValue: '',
    authorValue: '',
    categoryValue: ''
  };

  savePost = () => {
    const { titleValue, bodyValue, authorValue, categoryValue } = this.state;
    if (titleValue === '' || bodyValue === '' || authorValue === '' || categoryValue === '') {
      console.log('Missing values');
      return;
    }
    const newPost = {
      id: uuid.v1(),
      timestamp: Date.now(),
      title: titleValue,
      body: bodyValue,
      author: authorValue,
      category: categoryValue
    };
    this.props.dispatch(createPostAction(newPost));
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
      <div style={{backgroundColor: 'red'}}>
        <form>
          <input
            label="title"
            type="text"
            placeholder="Title"
            onChange={event => {this.updateInputValue(event, 'titleValue')}}
          />
          <input
            label="body"
            type="text"
            placeholder="Body"
            onChange={event => {this.updateInputValue(event, 'bodyValue')}}
          />
          <input
            label="author"
            type="text"
            placeholder="Author"
            onChange={event => {this.updateInputValue(event, 'authorValue')}}
          />
          <select onChange={(event) => {this.updateSelect(event)}}>
            <option defaultValue value="">-</option>
            {this.props.categories.map(category => (
              <option key={category.path} value={category.path}>{category.name}</option>
            ))}
          </select>
          <button type="button" onClick={this.savePost}>Accept</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  };
}

export default connect(mapStateToProps)(PostForm);
