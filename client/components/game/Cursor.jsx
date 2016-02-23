Cursor = React.createClass({

  componentDidMount () {

    const cookies = this.props.cookies ? this.props.cookies : 1;
    const seconds = this.props.seconds ? this.props.seconds : 10;

    const gameId = this.props.gameId;
    const inc = this.props.total * cookies;
    const interval = seconds * 1000;
    const react = this;

    const clickInterval = setInterval(function() {
      Meteor.call('cookieClick', gameId, inc, (error, result) => {
          if(!error) {
            react.animateFakeClicks();
          }
  		});
    }, interval);

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
    const cookies = this.props.cookies ? this.props.cookies : 1;
    const total = this.props.total * cookies;

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
