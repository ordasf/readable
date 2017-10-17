import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from '../logo.svg';
import '../App.css';
import { fetchCategories, fetchAllPosts } from '../actions';
import { Route } from 'react-router-dom';

class App extends Component {

  componentDidMount() {
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
          {
            this.props.categories.map((category) => (
              <p><a href={category.path}>{category.name}</a></p>
            ))
          }
        </div>
        <div>
          {
            <Route
              exact path={`/`}
              render={() => (
                <ul>
                  {
                    this.props.posts.map((post) => (
                      <li key={post.id}>{post.author} - {post.body}</li>
                    ))
                  }
                </ul>)
              }
            />
          }
          {
            this.props.categories.map(category => (
              <Route
                exact path={`/${category.path}`}
                render={() => (
                  <ul>
                    {
                      this.props.posts.map((post) => (
                        <li key={post.id}>{post.author} - {post.body}</li>
                      ))
                    }
                  </ul>)}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
    posts: state.posts
  };
}

export default connect(mapStateToProps)(App);
