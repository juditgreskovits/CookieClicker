Cursor = React.createClass({

  componentDidMount () {

    const gameId = this.props.gameId;
    const inc = this.props.total;

    const clickInterval = setInterval(function() {
      console.log('Cursor is clicking inc = ' + inc);
      Meteor.call('cookieClick', gameId, inc, (error, result) => {
  				// console.log('error = ' + error + ' result = ' + result);
  		});
    }, 10000);

    this.setState({ clickInterval : clickInterval });
  },

  componentWillUnmount () {

    const clickInterval = this.state.clickInterval;
    clearInterval( clickInterval );
  },

  createClickInterval() {

  },

  render() {

    return (
      <p>Cursor</p>
    )
  }
})
