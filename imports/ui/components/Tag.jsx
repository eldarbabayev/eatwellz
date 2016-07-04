import React, { Component, PropTypes } from 'react';

export default class Tag extends Component {
  render() {
    return (
      <li>
        <div className="tag_item">
          <p>{this.props.tag}</p>
        </div>
      </li>
    );
  }
}

Tag.propTypes = {
  tag: React.PropTypes.string,
};
