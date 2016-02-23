GamesList = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {

    let gamesSub = Meter.subscribe('games');

    return {
      
    }
  },

  render() {
    return (
      <div>
        
      </div>
    )
  }
})
  