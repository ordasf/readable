import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from '../logo.svg';
import '../App.css';
import { fetchCategoriesAction } from '../actions';
import { Route } from 'react-router-dom';
import Categories from './Categories';
import PostList from './PostList';
import PostDetail from './PostDetail'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCategoriesAction());
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Readable!</h1>
        </header>
        <Categories/>
        <div>
          <Route exact path={`/`} component={PostList} />
          <Route exact path={`/:category`} component={PostList} />
          <Route exact path={`/:category/:postId`} component={PostDetail}/>
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
