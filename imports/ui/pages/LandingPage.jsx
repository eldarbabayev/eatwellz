import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class LandingPage extends Component {

  constructor(props) {
      super(props);
      this.state = {
        text: '',
      };

      this.handleSubmit = this.handleSubmit.bind(this);
    }

  onChange(event) {
    this.setState({text: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.text === '') {
      $('#s_input').css({"border-color": "#FF0000"});
      $('#i_error').css({"visibility": "visible"});
    }  else {

      let postcode = this.state.text;
      postcode = postcode.replace(/\s/g, "");
      postcode = postcode.toUpperCase();
      let regex = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;

      if (regex.test(postcode)) {
        this.context.router.push(`/search/${ postcode }`);

        const nextText = '';
        this.setState({text: nextText});
      } else {
        $('#s_input').css({"border-color": "#FF0000"});
        $('#i_error').eq(0).html("Please enter correct UK postcode");
        $('#i_error').css({"visibility": "visible"});
      }
    }
  }


  render() {
    return (
      <div id="landing_outer">
      <header>
        <div id="logo">
          <a href=""><span>eat</span>wellz</a>
        </div>
      </header>
      <div id="out">
          <div id="descr">
              <h1>Search for meals cooked by locals</h1>
              <h3>Have them delivered to your doors</h3>
          </div>
          <div id="search">
              <div id="i_wrap">
                <input id="s_input" onChange={this.onChange.bind(this)} value={this.state.text} placeholder="Your Postcode" />
                <p id="i_error">Please type your postcode</p>
              </div>
              <button id="s_button" onClick={this.handleSubmit.bind(this)}>Search</button>
          </div>
      </div>
      </div>
    );
  }
}

LandingPage.contextTypes = {
  router: React.PropTypes.object,
};
