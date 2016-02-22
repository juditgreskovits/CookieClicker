Meteor.methods({

  'createGame': function () {
    console.log('createGame');
    return Games.insert({ clicks: 0 });
  },

  'cookieClick': function (gameId) {

    console.log('cookieClick gameId = ' + gameId);
    check(gameId, String);
    Games.update({ _id : gameId }, { $inc: { clicks : 1 }});
  },

  'buySpecial': function (gameId, specialId) {

    console.log('cookieClick gameId = ' + gameId);
    check(gameId, String);
    check(specialId, String);
  }
});
