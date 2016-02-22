Games.publicFields = {

}

Specials.publicFields = {

}

// function instead of () => to keep the this context. Eg. this.userId
Meteor.publish('games', function() {
  return Games.find({}, {
    fields: Games.publicFields
  });
});

Meteor.publish('specials', function() {
  return Specials.find({}, {
    fields: Specials.publicFields
  });
});
