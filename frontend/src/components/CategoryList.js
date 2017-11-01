import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class CategoryList extends React.Component {

  goToCategory = (categoryPath) => {
    this.props.history.push(`/${categoryPath}`);
  };

  render() {
    return (
      <div style={{backgroundColor: 'bisque'}}>
        {
          this.props.categories.map((category) => (
            <p key={category.path}>
              <button onClick={() => this.goToCategory(category.path)}>{category.name}</button>
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

export default withRouter(connect(mapStateToProps)(CategoryList));