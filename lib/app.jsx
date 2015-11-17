'use strict';

var React = require('react');

var Style = {height : "100px", width : "100px"};

var Box = React.createClass({
handleClick: function(){
    this.props.handleClick(this.props.rowIndex);
  },
  'render': function onRender () {
    return (
      <button style={Style} onClick={this.handleClick}>
      {this.props.value}</button>
    );
  }
});

var Row = React.createClass({
  getInitialState: function(){
    return {
      clicks: 0,
      rowValues: ['-', '-', '-']
    };
  },
  handleClick: function(index){
    var newValue = 'X';
    if(this.state.clicks % 2 === 0){
      newValue = 'O';
    }
    var rowValues = this.state.rowValues;
    rowValues[index] = newValue;
    this.setState({
      rowValues: rowValues,
      clicks: this.state.clicks + 1
    });
  },
  render: function(){
    var boxes = this.state.rowValues.map(function(value, index){
      return (
        <Box value={value} key={index} rowIndex={index} handleClick={this.handleClick}/>
      );
    }.bind(this));
    return (
      <div>
        {boxes}
      </div>
    );
  }
});

var Board = React.createClass({
  render: function(){
    return (
      <div>
        <Row/>
        <Row/>
        <Row/>
      </div>
    );
  }
})


React.render(<Board/>, document.body);
