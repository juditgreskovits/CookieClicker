Game = React.createClass({

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

  render() {

    const loading = this.data.loading;

    if(loading) {
      return (
        <p>Loading</p>
      )
    }

    const game = this.data.game;

    const style = {
      width: '100%',
      height: '100%'
    }

    return (
      <div style={style}>
        <Header gameId={game._id} clicks={game.clicks} />
        <Cookie gameId={game._id} />
        <Store gameId={game._id} clicks={game.clicks} />
      </div>
    )
  }
})
