import React, { Component, PropTypes } from 'react';

export default class Tag extends Component {
  render() {
    return (
      <li>
        <div className="tag_wrap">
          <p>{this.props.tag}</p>
        </div>
      </li>
    );
  }
}

Tag.propTypes = {
  // This component gets the meal to display through a React prop.
  // We can use propTypes to indicate it is required
  tag: PropTypes.object.isRequired,
};
