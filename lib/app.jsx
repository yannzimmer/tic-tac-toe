'use strict';

var React = require('react');

var Style = {height : "100px", width : "100px"};

var Box = React.createClass({
  getInitialState: function(){
    return {
      value: 'X'
    }
  },

  handleClick: function(){
    var oldValue = this.state.value;
    var newValue = oldValue === 'X' ? 'O': 'X';
    this.setState({
      value: newValue
    });
  },

  'render': function onRender () {
    return (
      <button style={Style} onClick={this.handleClick}>
      {this.state.value}</button>
    );
  }
});

React.render(<Box/>, document.body);
