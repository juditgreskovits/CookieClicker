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

    return (
      <p>Header</p>
    )
  }


});
