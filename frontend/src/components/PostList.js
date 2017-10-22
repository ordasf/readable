import React from 'react';
import { connect } from 'react-redux';
import { fetchCategoryPostsAction } from '../actions/index';
import PostForm from './PostForm';

class PostList extends React.Component {

  state = {
    showAddPostForm: false
  }

  componentDidMount() {
    const { category } = this.props.match.params;
    this.props.dispatch(fetchCategoryPostsAction(category));
  }

  showAddPostForm = () => {
    this.setState({
      showEditPostForm: true
    });
  };

  render() {
    return (
      <div style={{backgroundColor: 'gainsboro'}}>
        {
          this.props.posts.map((post) => {
            return (
              <div key={post.id}>
                <h3><a href={`${post.category}/${post.id}`}>{post.title}</a></h3>
                <h5>{post.author}</h5>
              </div>
            );
          })
        }
        <button onClick={this.showAddPostForm}>Add post</button>
        {this.state.showEditPostForm && (<PostForm/>)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(PostList);