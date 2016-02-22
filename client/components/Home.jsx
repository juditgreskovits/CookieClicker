Home = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    var gameId = Session.get('CookieClickerGameId');

    const react = this;
    if(!gameId) {
      console.log('Home.getMeteorData no game id');
      Meteor.call('createGame', (error, result) => {
        console.log('Home.getMeteorData result = ', result);
        react.gameId = result;
      });
    }

    return {
      isGameId: !!gameId
    }
  },

  render() {

    if(!this.data.isGameId) {
      return (
        <p>Loading</p>
      )
    }

    return (
      <Cookie gameId={this.data.gameId} />
    )
  }
})
