Cookie = React.createClass({

  onCookieClick() {

    const gameId = this.props.gameId;

    Meteor.call('cookieClick', gameId, (error, result) => {
				console.log('error = ' + error + ' result = ' + result);
		});
  },

  render() {

    var divStyle = {
      position: 'relative',
      float: 'left',
      height: '100%',
      width: '50%',
      backgroundImage: 'url("/images/cloth.png")',
      backgroundRepeat: 'repeat',
      backgroundSize: '100px 100px'
    }

    var cookieStyle = {
      position: 'absolute',
      display: 'inline-block',
      zoom: '1',
      width: '80%',
      paddingTop: '76%',
      left: '10%',
      top: '25%',
      border: 'none',
      backgroundImage: 'url("/images/cookie.png")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundColor: 'transparent'
    }

    return (
      <div style={divStyle}>
        <button style={cookieStyle} onClick={this.onCookieClick} ref="cookie">
          {this.props.children}
        </button>
      </div>
    )
  }
})
