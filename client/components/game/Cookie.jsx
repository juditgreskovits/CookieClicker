Cookie = React.createClass({

  onCookieClick() {

    const gameId = this.props.gameId;

    Meteor.call('cookieClick', gameId, (error, result) => {
				console.log('error = ' + error + ' result = ' + result);
		});
  },

  render() {

    var divStyle = {
      height: '100%',
      width: '50%',
      backgroundImage: 'url("/images/cloth.png")',
      backgroundRepeat: 'repeat',
      backgroundSize: '100px 100px'
    }

    var cookieStyle = {
      display: 'inline-block',
      zoom: '1',
      width: '80%',
      paddingTop: '76%',
      margin: '20% 10%',
      border: 'none',
      backgroundImage: 'url("/images/cookie.png")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundColor: 'transparent'
    }

    return (
      <div style={divStyle}>
        <button style={cookieStyle} onClick={this.onCookieClick}></button>
      </div>
    )
  }
})
