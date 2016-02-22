Special = React.createClass({

  onSpecialClick() {

    const specialId = this.props.id;

    this.props.onSpecialClick(specialId);
  },

  render() {

    var divStyle = {
      width: '100%',
      padding: '5px 10px',
      borderBottom: '1px solid #cccccc',
      cursor: 'pointer'
    }

    /*var cookieStyle = {
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
    }*/

    const title = this.props.title;
    const description = this.props.description;

    return (
      <div style={divStyle} onClick={this.onSpecialClick}>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    )
  }
})
