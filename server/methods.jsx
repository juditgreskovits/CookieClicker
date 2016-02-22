Meteor.methods({

  'createGame': function () {
    console.log('createGame');
    return Games.insert({ clicks : 0, specials : { Cursor : 0, Grandma : 0 }});
  },

  'cookieClick': function (gameId) {

    console.log('cookieClick gameId = ' + gameId);
    check(gameId, String);
    Games.update({ _id : gameId }, { $inc : { clicks : 1 }});
  },

  'buySpecial': function (gameId, specialId) {

    console.log('cookieClick gameId = ' + gameId);
    check(gameId, String);
    check(specialId, String);

    const game = Games.findOne({ _id : gameId });
    const special = Specials.findOne({ _id : specialId });
    console.log(`special.component  = ${special.component}`);
    // const updateSpecial = {};
    // updateSpecial[ special.id ] = 1;
    Games.update({ _id : gameId }, { specials : { $inc : { [`special.component`] : 1 }}});

    console.log('*** game.specials = ', game.specials);
  }
});
