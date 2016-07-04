import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import MealItem from '../components/MealItem.jsx';
import Message from '../components/Message.jsx';
import SearchHeader from '../components/SearchHeader.jsx';


export default class MealList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {


    let Meals;
    if (!this.props.meals || !this.props.meals.length) {
      Meals = (
        <Message
          title="No meals at this location"
          subtitle="Please search for different postcode"
        />
      );
    } else {
      Meals = this.props.meals.map(meal => (
        <MealItem
          meal={meal}
          key={meal._id}
        />
      ));
    }

    return (
        <div className="page meals-show">
          <SearchHeader postcode={this.props.postcode}/>
          <div className="content-scrollable meal-items">
            {this.props.loading ? <Message title="Loading meals..."/> : Meals}
          </div>
        </div>
    );
  }
}


MealList.propTypes = {
  postcode: React.PropTypes.string,
  meals: React.PropTypes.array,
  loading: React.PropTypes.bool,
};

MealList.contextTypes = {
  router: React.PropTypes.object,
};
