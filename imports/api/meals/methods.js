Meteor.methods({

  'meals.insert'(imgURL, name, dateAndTime, price, tags) {

    console.log(imgURL);

    let meal = {
      imgURL: imgURL,
      name: name,
      dateAndTime: dateAndTime,
      price: price,
      userId: this.userId,
      createdAt: new Date(),
      bought: false,
    };

    if (tags === undefined) {

    } else {
      meal["tags"] = tags;

    }

    Meals.schema.validate(meal);

    // Make sure the user is logged in before inserting a meal
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Meals.insert({
      meal,
    });
  },
  'meals.remove'(mealId) {
    check(mealId, String);

    const meal = Meals.findOne(mealId);
    if (meal.userId !== this.userId) {
      // make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }

    Meals.remove(mealId);
  },
  'meals.setBought'(mealId, setBought) {
    check(mealId, String);
    check(setBought, Boolean);

    const meal = Meals.findOne(mealId);

    Meals.update(mealId, { $set: { bought: setBought } });
  },
});
