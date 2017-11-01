import React from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom';

class CategoryList extends React.Component {

  render() {
    return (
      <div style={{backgroundColor: 'bisque'}}>
        {
          this.props.categories.map((category) => (
            <p key={category.path}>
              <Link to={`/${category.path}`}>{category.name}</Link>
            </p>
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

export default connect(mapStateToProps)(CategoryList);