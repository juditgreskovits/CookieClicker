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

  onCursor(clicks) {

    this.refs.cookie.fakeClicks(clicks);
  },

  renderSpecials () {
    console.log('renderSpecials cursors = '+ cursors);
    const gameId = this.data.game._id;
    const cursors = this.data.game.specials.Cursor;

    if(cursors > 0) {
      return <Cursor gameId={gameId} total={cursors} />
    }
  },

  render() {

    console.log('Game.render');

    const loading = this.data.loading;

    if(loading) {
      return (
        <p>Loading</p>
      )
    }

    const game = this.data.game;
    const clicks = game.clicks - game.spentClicks;
    const specials = this.renderSpecials();

    const style = {
      width: '100%',
      height: '100%'
    }

    return (
      <div style={style}>
        <Header gameId={game._id} clicks={clicks} />
        <Cookie ref="cookie" gameId={game._id}>
          {specials}
        </Cookie>
        <Store gameId={game._id} clicks={clicks} gameSpecials={game.specials}/>
      </div>
    )
  }
})
