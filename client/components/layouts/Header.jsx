Header = React.createClass({

  getInitialState() {
    return { 
      changingGameName: false,
      gameName: null
    }
  },

  mixins: [ReactMeteorData],

  getMeteorData() {

    let gamesSub = Meteor.subscribe('games');

    return {
      currentUser: Meteor.user(),
      myGame: Games.findOne({ _id: this.props.gameId })
    }
  },

  componentDidMount() {
    if ( !this.data.myGame.name ) {
      this.setState({ gameName: this.props.gameId });
    } else {
      this.setState({ gameName: this.data.myGame.name });
    }
  },

  changeName() {
    this.setState( { changingGameName: true } );
  },

  submitForm(e) {
    e.preventDefault();
    const newName = this.refs.newName.value.trim();
    this.setState( { gameName: newName } );
    Meteor.call("updateGameName", this.props.gameId, newName);
    this.setState( { changingGameName: false } );
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
        <div className="container change-name">
          <div className="row">
            
            <div className="col-xs-6">
              
              { this.state.changingGameName ? 
                <div>
                  <h4>Game: </h4>
                  <form role="form" onSubmit={ this.submitForm }>

                    <div className="form-group">
                      <input 
                        type="text"
                        ref="newName"
                        className="form-control" 
                        placeholder="New game name" 
                      />
                    </div>

                  </form>
                </div>  
              :
                <div>
                  <h4>Game: { this.state.gameName }</h4>
                  <button className="btn btn-submit" onClick={ this.changeName }>Change</button>
                </div>
              }
            </div>

            <div className="col-xs-6">
              <h1 style={ h1Style }>{ clicks } cookies</h1>
            </div>

          </div>
        </div>
      </div>
    )
  }
});
