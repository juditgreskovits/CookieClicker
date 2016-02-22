Header = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user()
    }
  },

  handleSignOut() {
    Meteor.logout((error, success) => {
      if (error) console.log(error);
      FlowRouter.go("/");
    });
  },

  render() {

    const gameId = this.props.gameId;
    const clicks = this.props.clicks;

    const divStyle = {
      position: 'fixed',
      width: '100%',
      height: '80px',
      backgroundColor: '#ffffff',
      boxShadow: '0 1px 10px 5px rgba(0, 0, 0, 0.3)'
    }

    const h1Style = {
      textAlign: 'center'
    }

    return (
      <div style={divStyle}>
        <h1 style={h1Style}>{clicks} cookies</h1>
      </div>
    )
  }
});
