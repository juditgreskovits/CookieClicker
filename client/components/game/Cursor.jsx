Cursor = React.createClass({

  componentDidMount () {

    const gameId = this.props.gameId;
    const inc = this.props.total;
    const react = this;

    const clickInterval = setInterval(function() {
      console.log('Cursor is clicking inc = ' + inc);
      Meteor.call('cookieClick', gameId, inc, (error, result) => {
  				// console.log('error = ' + error + ' result = ' + result);
          react.props.onCursor(inc);
  		});
    }, 10000);

    this.setState({ clickInterval : clickInterval });
  },

  componentWillUnmount () {

    const clickInterval = this.state.clickInterval;
    clearInterval( clickInterval );
  },

  renderFakeClicks() {

    let fakeClicks = [];
    const total = this.props.total;

    while(fakeClicks.length < total) {
      stars.push(<FakeClick />);
    }

    return fakeClicks;
  },

  render() {

    const fakeClicks = this.renderFakeClicks();

    const divStyle = {
      width: '100%',
      height: '100%'
    }

    return (
      <div style={divStyle}>
        {fakeClicks}
      </div>
    )
  }
})
