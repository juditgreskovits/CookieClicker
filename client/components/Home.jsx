Home = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {

    const gameId = this.props.gameId ? this.props.gameId : localStorage.getItem('CookieClickerGameId');

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
      <Game gameId={this.data.gameId} />
    )
  }
})
