FakeClick = React.createClass({

  animate() {

    const click = ReactDOM.findDOMNode(this.refs.click);
    const position = this.getClickPosition();

    $(click).css({
      position: 'absolute',
      top: 50 + position.y + '%',
      left: 50 + position.x + '%',
      width: '10px',
      height: '10px',
      opacity: 1,
    });

    $(click).animate({
      opacity: 0,
      width: "+=50",
      height: "+=50",
      top: "-=25",
      left: "-=25",
    }, 1500, function() {
      // Animation complete.
    });
  },

  getClickPosition() {
    const randomRadius = Math.round(Math.random() * 50);
    const randomAngle =  Math.random() * Math.PI * 2;
    const x = Math.sin(randomAngle) * randomRadius;
    const y = Math.cos(randomAngle) * randomRadius;
    return { x : x, y : y};
  },

  render () {

    const clickStyle = {
      position: 'absolute',
      width: '10px',
      height: '10px',
      backgroundColor : '#ff0000',
      borderRadius: "50%",
      opacity: 0,
    };

    return (
      <div style={clickStyle} ref="click"></div>
    )
  }
})
