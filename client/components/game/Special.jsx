Special = React.createClass({

  onSpecialClick() {

    const specialId = this.props.id;

    this.props.onSpecialClick(specialId);
  },

  render() {

    var divStyle = {
      width: '100%',
      padding: '10px 20px',
      borderBottom: '1px solid #cccccc',
      cursor: 'pointer'
    }

    var titleStyle = {
      fontWeight: 'bold'
    }

    var numberStyle = {
      color: '#ff0000'
    }

    const title = this.props.title;
    const description = this.props.description;
    const clicks = this.props.clicks;
    const gameSpecial = this.props.gameSpecial;

    return (
      <div style={divStyle} onClick={this.onSpecialClick}>
        <h4 style={titleStyle}>{title} <span style={numberStyle}>({gameSpecial})</span></h4>
        <p>{description}</p>
        <p style={numberStyle}>{clicks}</p>
      </div>
    )
  }
})
