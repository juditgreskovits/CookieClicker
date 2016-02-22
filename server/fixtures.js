if(Games.find().count() === 0) {

	var games = [
		{clicks: 5},
		{clicks: 10},
    {clicks: 12}
	];

	for( var i = 0; i< games.length; i++) {

		var game = games[i];
		Games.insert(game);
	}
}
