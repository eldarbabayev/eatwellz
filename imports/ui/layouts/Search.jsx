import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import MealItem from '../components/MealItem.jsx';
import Message from '../components/Message.jsx';


export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    console.log(this.props.meals);

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

            <div className="content-scrollable meal-items">
              {this.props.loading ? <Message title="Loading meals..."/> : Meals}
            </div>
        </div>
    );
  }
}


Search.propTypes = {
  meals: React.PropTypes.array,
  loading: React.PropTypes.bool,
};

Search.contextTypes = {
  router: React.PropTypes.object,
};
