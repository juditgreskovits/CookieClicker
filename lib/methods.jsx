Meteor.methods({

  'createGame': function () {
    
    return Games.insert({ clicks : 100, spentClicks: 0, specials : { Cursor : 0, Grandma : 0 }});
  },

  'cookieClick': function (gameId, inc) {

    if(isNaN(inc) || inc === 0) {
      inc = 1;
    }
    check(gameId, String);
    check(inc, Number);

    Games.update({ _id : gameId }, { $inc : { clicks : inc }});
  },

  'buySpecial': function (gameId, specialId) {

    check(gameId, String);
    check(specialId, String);

    const game = Games.findOne({ _id : gameId });
    const special = Specials.findOne({ _id : specialId });

    const updateQuery = {$inc:{}};
    updateQuery.$inc['specials.' + special.component] = 1

    Games.update({ _id : gameId }, updateQuery);
    Games.update({ _id : gameId }, {$inc : { spentClicks : special.clicks }});
  },

  updateGameName(gameId, name) {
    check( gameId, String );
    check( name, String );
    
    Games.update( { _id: gameId }, { $set: { name: name} } );
  },

});
