Cookie = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {

    const gameId = this.props.gameId;
    const gameSub = Meteor.subscribe('games');

    return {
      game: Games.find({ _id : gameId }).fetch()
    }
  },

  onCookieClick() {

    const gameId = this.data.game._id;

    console.log('Cookie.onCookieClick gameId = ' + gameId);

    Meteor.call('cookieClick', gameId, (error, result) => {
				console.log('error = ' + error + ' result = ' + result);
				// react.history.pushState(null, '/results');
			});

  },

  render() {

    console.log('Cookie.render this.data.game.clicks = ' + this.data.game.clicks);

    return (
      <div>
        <p>Clicks: {this.data.game.clicks}</p>
        <button onClick={this.onCookieClick}>Cookie</button>
      </div>
    )
  }
})
