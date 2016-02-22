Store = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData () {

    const clicks = this.props.clicks;
    const storeSubHandle = Meteor.subscribe('store');
    const loading = !storeSubHandle.ready();

    return {
      loading: loading,
      specials: Store.find().fetch()
    }
  },

  onSpecialClick () {
    console.log('Store.onSpecialClick');
  },

  renderSpecials () {
    const specials = this.data.game;

    return specials.map((special, index) => {

			const specialId = specials._id;
			const specialTitle = specials.title;
			const specialDescription = specials.description;

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
