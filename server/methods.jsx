Meteor.methods({

'cookieClick': function (gameId) {

    console.log('cookieClick gameId = ' + gameId);
    check(gameId, String);
    Games.update({ _id : gameId }, { $inc: { clicks : 1 }});
  }
});
