Store = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData () {

    const clicks = this.props.clicks;
    const storeSubHandle = Meteor.subscribe('specials');
    const loading = !storeSubHandle.ready();

    return {
      loading: loading,
      specials: Specials.find({ clicks : { $lte : clicks }}).fetch()
    }
  },

  onSpecialClick (specialId) {

    const gameId = this.props.gameId;

    Meteor.call('buySpecial', gameId, specialId, (error, result) => {
				console.log('error = ' + error + ' result = ' + result);
		});
  },

  renderSpecials () {
    const specials = this.data.specials;

    return specials.map((special, index) => {

			const specialId = special._id;
			const specialTitle = special.title;
			const specialDescription = special.description;

			return (
				<Special key={specialId} onSpecialClick={this.onSpecialClick} id={specialId} title={specialTitle} description={specialDescription} />
			)
		});
  },

  render () {

    const loading = this.data.loading;

    if(loading) {
      return (
        <p>Loading</p>
      )
    }

    const specials = this.renderSpecials();

    const style = {
      paddingTop: '80px',
      borderLeft: '1px solid #cccccc',
      float: 'right',
      width: '50%',
      height: '100%'
    }

    return (
      <div style={style}>
        {specials}
      </div>
    )
  }
})
