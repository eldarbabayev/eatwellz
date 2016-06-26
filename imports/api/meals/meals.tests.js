/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';

import { Meals } from './meals.js';

if (Meteor.isServer) {
  describe('Meals', () => {
    describe('methods', () => {
      const userId = Random.id();
      let mealId;

      beforeEach(() => {
        Meals.remove({});
        mealId = Meals.insert({
          smallPhoto: 'test task',
          name: 'test meal',
          dateAndTime: new Date(),
          price: 5,
          postcode: 'test postcode',
          userId: userId,
          createdAt: new Date(),
          bought: false,
        });
      });

      it('can delete owned meals', () => {
        // Find the internal implementation of the meal method so we can
        // test it in isolation
        const deleteMeal = Meteor.server.method_handlers['meals.remove'];

        // Set up a fake method invocation that looks like what the method expects
        const invocation = { userId };

        // Run the method with `this` set to the fake invocation
        deleteMeal.apply(invocation, [mealId]);

        // Verify that the method does what we expected
        assert.equal(Meals.find().count(), 0);
      });
    });
  });
}
