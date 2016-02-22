MainLayout = React.createClass({

  render() {

    const style = {
      width: '100%',
      height: '100%'
    }

    return (
      <div style={style}>
        { this.props.content }
      </div>
    )
  }
});
