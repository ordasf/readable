import React from 'react';

class Post extends React.Component {

  componentDidMount() {
    debugger;
  }

  render() {
    const post = this.props.postInfo;
    return (
      <div>
        <h3><a href={post.id}>{post.title}</a></h3>
        <h5>{post.author}</h5>
      </div>
    );
  }
}

export default Post;