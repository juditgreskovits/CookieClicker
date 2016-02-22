Home = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      game: Games.findOne()
    }
  },

  onCookieClick() {

    const gameId = this.data.game._id;

    console.log('Home.onCookieClick gameId = ' + gameId);

    Meteor.call('cookieClick', gameId, (error, result) => {
				console.log('error = ' + error + ' result = ' + result);
				// react.history.pushState(null, '/results');
			});

  },

  render() {

    console.log('Home.render this.data.game.clicks = ' + this.data.game.clicks);

    return (
      <div>
        <p>Clicks: {this.data.game.clicks}</p>
        <button onClick={this.onCookieClick}>Cookie</button>
      </div>
    )
  }
})
