import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { Meals } from '../../api/meals/meals.js';
import { createContainer } from 'meteor/react-meteor-data';
import Search from '../layouts/Search.jsx';

export default createContainer(({ params: { postcode } }) => {
  const mealsHandle = Meteor.subscribe('meals.withPostcode', postcode);
  const loading = !mealsHandle.ready();
  return {
    postcode: postcode,
    menuOpen: Session.get('menuOpen'),
    user: Meteor.user(),
    loading: loading,
    meals: Meals.find({}).fetch(),
  };
}, Search);
