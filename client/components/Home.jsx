Home = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    var gameId = localStorage.getItem('CookieClickerGameId');

    const react = this;
    if(!gameId) {
      Meteor.call('createGame', (error, result) => {
        const gameId = result;
        localStorage.setItem('CookieClickerGameId', gameId);
        react.forceUpdate();
      });
    }

    return {
      gameId: gameId
    }
  },

  render() {

    if(!this.data.gameId) {
      return (
        <p>Loading</p>
      )
    }

    return (
      <Cookie gameId={this.data.gameId} />
    )
  }
})
