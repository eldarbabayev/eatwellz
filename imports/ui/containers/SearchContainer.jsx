import { Meteor } from 'meteor/meteor';
import { Meals } from '../../api/meals/meals.js';
import { createContainer } from 'meteor/react-meteor-data';
import Search from '../layouts/Search.jsx';

export default createContainer(({ params: { postcode } }) => {
  const mealsHandle = Meteor.subscribe('meals.withPostcode', postcode);
  console.log(Meals.find({}).fetch());
  const loading = !mealsHandle.ready();
  console.log(loading);
  console.log(typeof(postcode));
  return {
    user: Meteor.user(),
    loading: loading,
    meals: Meals.find({}).fetch(),
  };
}, Search);
