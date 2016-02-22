Cookie = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {

    const gameId = this.props.gameId;
    const gameSubHandle = Meteor.subscribe('games');
    const loading = !gameSubHandle.ready();

    return {
      loading: loading,
      game: Games.findOne({ _id : gameId })
    }
  },

  onCookieClick() {

    const gameId = this.data.game._id;

    Meteor.call('cookieClick', gameId, (error, result) => {
				console.log('error = ' + error + ' result = ' + result);
		});
  },

  render() {

    const loading = this.data.loading;

    if(loading) {
      return (
        <p>Loading</p>
      )
    }

    const game = this.data.game;

    return (
      <div>
        <p>Clicks: {this.data.game.clicks}</p>
        <button onClick={this.onCookieClick}>Cookie</button>
      </div>
    )
  }
})
