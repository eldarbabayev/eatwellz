/* eslint-disable prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';

import { Meals } from '../meals.js';

Meteor.publish('meals', function meals() {
  return Meals.find({
  });
});

Meteor.publish('meals.withPostcode', function mealsWithPostcode(postcode) {
  new SimpleSchema({
    postcode: { type: String },
  }).validate({ postcode });

  return Meals.find({
    postcode: postcode,
  }, {
    fields: Meals.publicFields,
  });
});
