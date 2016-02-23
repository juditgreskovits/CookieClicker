GamesList = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {

    let gamesSub = Meteor.subscribe('games');

    return {
      gamesReady: gamesSub.ready(),
      games: Games.find().fetch()
    }
  },

  render() {

    console.log("Games List rendering...")

    const divStyle = {
       paddingTop: '80px',
       borderLeft: '1px solid #cccccc ',
       float: 'right',
       width: '50%',
       height: '100%'
     }

    const titleStyle = {
       backgroundColor: '#000000 ',
       padding: '5px 20px',
       color: '#ffffff '
    }

    return (
       <div style={divStyle}>
         <h2 style={titleStyle}>List of Games</h2>

       </div>
    )
  }
});
  