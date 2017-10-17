import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from '../logo.svg';
import '../App.css';
import { fetchCategories, fetchAllPosts } from '../actions';

class App extends Component {

  /*state = {
    categories: []
  }*/

  componentDidMount() {
    /*fetchCategories()
      .then(data => {
        this.setState((state) => {
          return {
            ...state,
            categories: data.categories
          }
        });
    })*/
    this.props.dispatch(fetchCategories());
    this.props.dispatch(fetchAllPosts());
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Readable!</h1>
        </header>
        <div>
          <ul>
            {
              this.props.categories.map((category) => (
                <li key={category.name}>{category.name} - {category.path}</li>
              ))
            }
          </ul>
        </div>
        <div>
          <ul>
            {
              this.props.posts.map((post) => (
                <li key={post.id}>{post.author} - {post.body}</li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  debugger;
  return {
    categories: state.categories,
    posts: state.posts
  };
}

export default connect(mapStateToProps)(App);
