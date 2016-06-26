import { Meteor } from 'meteor/meteor';
import { Meals } from '../../api/meals/meals.js';


// if the database is empty on server start, create some sample data.
Meteor.startup(() => {
  if (Meals.find().count() === 0) {
    const data = [
      {
        name: "kebab",
        postcode: "OX27LJ",
        imgURL: "/img/kebab_small.jpg",
        dateAndTime: new Date(),
        price: 5, userId: "user1",
        bought: false,
        tags: ["turkish", "exotic"]
      },
    ];

    let timestamp = (new Date()).getTime();

    data.forEach((meal) => {
      const mealId = Meals.insert({
        name: meal.name,
        postcode: meal.postcode,
        imgURL: meal.imgURL,
        dateAndTime: meal.dateAndTime,
        price: meal.price,
        createdAt: new Date(timestamp),
        bought: meal.bought,
        tags: meal.tags,
      });

        timestamp += 1; // ensure unique timestamp.
    });
  }
});
