import React from 'react';
import { connect } from 'react-redux';
import { fetchCategoryPostsAction, sortPostsByTimeAction, sortPostsByTimeScore } from '../actions/index';
import PostForm from './PostForm';

class PostList extends React.Component {

  state = {
    showAddPostForm: false,
    orderType: 'timeSort'
  };

  componentDidMount() {
    const { category } = this.props.match.params;
    this.props.dispatch(fetchCategoryPostsAction(category));
  }

  showAddPostForm = () => {
    this.setState({
      showEditPostForm: true
    });
  };

  changeSorting = (event) => {
    const sortMethod = event.target.value;
    if (sortMethod === 'timeSort') {
      this.props.dispatch(sortPostsByTimeAction(this.props.posts));
    } else {
      this.props.dispatch(sortPostsByTimeScore(this.props.posts));
    }
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
                <p>voteScore: {post.voteScore} - time: {post.timestamp}</p>
              </div>
            );
          })
        }
        <button onClick={this.showAddPostForm}>Add post</button>
        <select defaultValue={this.state.orderType} onChange={(event) => this.changeSorting(event)}>
          <option value="timeSort">Sort by Time</option>
          <option value="scoreSort">Sort by Score</option>
        </select>
        {this.state.showEditPostForm && (<PostForm editMode={false}/>)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  debugger;
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(PostList);