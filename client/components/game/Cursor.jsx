Cursor = React.createClass({

  componentDidMount () {

    const gameId = this.props.gameId;
    const inc = this.props.total;
    const react = this;

    const clickInterval = setInterval(function() {
      Meteor.call('cookieClick', gameId, inc, (error, result) => {
          if(!error) {
            react.animateFakeClicks();
          }
  		});
    }, 10000);

    this.setState({ clickInterval : clickInterval });
  },

  componentWillUnmount () {

    const clickInterval = this.state.clickInterval;
    clearInterval( clickInterval );
  },

  shouldComponentUpdate (nextProps, nextState) {

    return nextProps.total != this.props.total;
  },

  renderFakeClicks() {

    let fakeClicks = [];
    const total = this.props.total;

    while(fakeClicks.length < total) {
      const key = 'fakeClick' + fakeClicks.length;
      fakeClicks.push(<FakeClick key={key} ref={key} />);
    }

    return fakeClicks;
  },

  animateFakeClicks() {
    let i = 0;
    while(this.refs['fakeClick' + i]) {
      const fakeClick = this.refs['fakeClick' + i++];
      fakeClick.animate();
    }
  },

  render() {

    const fakeClicks = this.renderFakeClicks();

    const divStyle = {
      width: '100%',
      height: '100%',
      backgroundColor: '#ffffff'
    }

    return (
      <div style={divStyle}>
        { fakeClicks }
      </div>
    )
  }
})
