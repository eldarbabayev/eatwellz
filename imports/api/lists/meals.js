import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
//import { Factory } from 'meteor/factory';

/*
if (Meteor.isServer) {

  const fs = require('fs');

  Meteor.methods({
    'saveImage'(base64_data, id) {
      let imageBuffer = new Buffer(base64_data, 'base64');
      console.log(fs);
      let decodedImage = new Buffer(imageBuffer, 'base64').toString('binary');

      fs.writeFile('/Users/eldarbabayev/Desktop/eatwellz/public/img/userImages/' + id + '.jpg', imageBuffer, function(err) {
      });
    }
  });
}
*/

export const Meals = new Mongo.Collection('Meals');

// Deny all client-side updates since we will be using methods to manage this collection
Meals.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Meals.schema = new SimpleSchema({
  imgURL: {type: String},
  name: {type: String},
  dateAndTime: {type: Date},
  price: {type: Number},
  tags: {type: [String], optional: true},
  postcode: {type: String},
  userId: {type: String, regEx: SimpleSchema.RegEx.Id},
  createdAt: {type: Date},
  bought: {type: Boolean},
});

//Meals.attachSchema(Meals.schema);

// This represents the keys from Lists objects that should be published
// to the client. If we add secret properties to List objects, don't list
// them here to keep them private to the server.
Meals.publicFields = {
  imgURL: 1,
  name: 1,
  price: 1,
  tags: 1,
};

Factory.define('meals', Meals, {});

//Meals.helpers({

//});
