import React from 'react';
import { connect } from 'react-redux';

class CategoryDropdown extends React.Component {

  render() {
    return (
      <select>
        {this.props.categories.map(category => (
          <option key={category.path} value={category.path}>{category.name}</option>
        ))}
      </select>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps)(CategoryDropdown);
