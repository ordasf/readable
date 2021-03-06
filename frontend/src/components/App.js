import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from '../logo.svg';
import '../App.css';
import { fetchCategoriesAction } from '../actions';
import { Route, withRouter, Link } from 'react-router-dom';
import Categories from './CategoryList';
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
          <h1 className="App-title"><Link to="/">Readable!</Link></h1>
        </header>
        <div style={bodyStyle}>
          <Categories/>
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

const bodyStyle = {
  marginLeft: '10%',
  marginRight: '10%'
};

export default withRouter(connect(mapStateToProps)(App));
