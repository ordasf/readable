import React from 'react';
import { connect } from 'react-redux'

class Categories extends React.Component {

  render() {
    return (
      <div style={{backgroundColor: 'bisque'}}>
        {
          this.props.categories.map((category) => (
            <p key={category.path}><a href={category.path}>{category.name}</a></p>
          ))
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  };
}

export default connect(mapStateToProps)(Categories);