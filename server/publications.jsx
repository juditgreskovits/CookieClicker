Games.publicFields = {

}

Store.publicFields = {

}

// function instead of () => to keep the this context. Eg. this.userId
Meteor.publish('games', function() {
  return Games.find({}, {
    fields: Games.publicFields
  });
});

Meteor.publish('store', function() {
  return Store.find({}, {
    fields: Store.publicFields
  });
});
