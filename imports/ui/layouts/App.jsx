import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
