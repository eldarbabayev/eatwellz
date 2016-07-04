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
        price: 5,
        userId: "WoLwk9Fi5qDS3bEk4",
        bought: false,
        tags: ["turkish", "exotic"]
      },
      {
        name: "lahmacun",
        postcode: "OX27LJ",
        imgURL: "/img/lahmacun_small.jpg",
        dateAndTime: new Date(),
        price: 3,
        userId: "WoLwk9Fi5qDS3bEk4",
        bought: false,
        tags: ["turkish", "exotic"]
      },
      {
        name: "doner",
        postcode: "OX27LJ",
        imgURL: "/img/doner_small.jpg",
        dateAndTime: new Date(),
        price: 5,
        userId: "WoLwk9Fi5qDS3bEk4",
        bought: false,
        tags: ["turkish", "exotic"]
      },
      {
        name: "ayran",
        postcode: "OX27LJ",
        imgURL: "/img/ayran_small.jpg",
        dateAndTime: new Date(),
        price: 2,
        userId: "WoLwk9Fi5qDS3bEk4",
        bought: false,
        tags: ["turkish"]
      }
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
        userId: meal.userId,
      });

        timestamp += 1; // ensure unique timestamp.
    });
  }
});
