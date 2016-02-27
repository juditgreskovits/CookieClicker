if(Specials.find().count() === 0) {

	var specials = [
		{ component: 'Cursor', title : 'Cursor', description : 'Clicks for you every 10 seconds', clicks : 15},
		{ component: 'Grandma', title : 'Grandma', description : 'Bakes a cookie every now and then', clicks : 100}
	];

	specials.forEach((special) => Specials.insert(special));
}
