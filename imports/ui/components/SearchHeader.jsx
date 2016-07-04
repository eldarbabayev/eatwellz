import React from 'react';
import MobileMenu from './MobileMenu.jsx';
import { displayError } from '../helpers/errors.js';

export default class SearchHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editing: false };
    this.onPostcodeChange = this.onPostcodeChange.bind(this);
    this.onPostcodeInputKeyUp = this.onPostcodeInputKeyUp.bind(this);
    this.onPostcodeInputBlur = this.onPostcodeInputBlur.bind(this);
    this.changePostcode = this.changePostcode.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.updatePostcode = this.updatePostcode.bind(this);
  }

  onPostcodeChange(event) {
    event.preventDefault();
    this.updatePostcode();
  }

  onPostcodeInputKeyUp(event) {
    if (event.keyCode === 27) {
      this.cancelEdit();
    }
  }

  onPostcodeInputBlur() {
    if (this.state.editing) {
      this.updatePostcode();
    }
  }

  changePostcode() {
    this.setState({ editing: true }, () => {
      this.refs.postcodeInput.focus();
    });
  }

  cancelEdit() {
    this.setState({ editing: false });
  }

  updatePostcode() {
    this.setState({ editing: false });
    this.context.router.replace(`/search/${ this.refs.postcodeInput.value }`);
  }

  renderDefaultHeader() {
    const { postcode } = this.props;
    return (
      <div>
        <MobileMenu/>
        <h1 className="search-postcode" onClick={this.changePostcode}>
          <span className="title-wrapper">{postcode}</span>
        </h1>
      </div>
    );
  }

  renderEditingHeader() {
    return (
      <form className="postcode-edit-form" onSubmit={this.onPostcodeChange}>
        <input type="text"
          name="name"
          autoComplete="off"
          ref="postcodeInput"
          defaultValue={this.props.postcode}
          onKeyUp={this.onPostcodeInputKeyUp}
          onBlur={this.onPostcodeInputBlur}
        />
        <div className="nav-group right">
          <a className="nav-item"
            onMouseDown={this.cancelEdit}
            onClick={this.cancelEdit}
          >
          <span className="icon-close" title="Cancel"></span>
          </a>
        </div>
      </form>
    );
  }

  render() {
    const { editing } = this.state;
    return (
      <nav className="search-header">
        {editing ? this.renderEditingHeader() : this.renderDefaultHeader()}
      </nav>
    );
  }
}

SearchHeader.propTypes = {
  postcode: React.PropTypes.string,
};

SearchHeader.contextTypes = {
  router: React.PropTypes.object,
};
