import React, { Component, PropTypes } from 'react';
import {guid} from '/util/utils.js'
import Tag from './Tag.jsx';

export default class MealItem extends Component {

  renderTags () {
    return this.props.meal.tags.map((tag) => (
      <Tag tag={tag} key={guid()}/>
    ));
  }

  render() {
    return (
      <div>
        <div className="meal_item" onClick={this.props.onClick}>
          <div className="meal_photo">
            <img src={this.props.meal.imgURL}/>
          </div>
          <div className="meal_information">
              <h2 className="meal_title">{this.props.meal.name}</h2>
                <div className="clearer"></div>
              <ul className="tags">
                  {this.renderTags()}
              </ul>
          </div>
            <div className="meal_price">
              <h2>£{this.props.meal.price}</h2>
            </div>
        </div>
        <div className="separator_line">

        </div>
      </div>
      );
  }
}

MealItem.propTypes = {
  meal: React.PropTypes.object,
};
