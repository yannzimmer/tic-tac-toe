'use strict';

var React = require('react');

var Style = {height : "100px", width : "100px"};

var Box = React.createClass({
  getInitialState: function(){
    return {
      value: 'X'
    }
  },

  componentWillMount: function(){
      var _this = this;
      this.timer = setInterval(function(){
        var oldValue = _this.state.value;
        var newValue = oldValue === 'X' ? 'O': 'X';
        _this.setState({
          value: newValue
        });
      }, 300);
    },
    
    componentWillUnmount: function(){
      clearInterval(this.timer);
    },

  'render': function onRender () {
    return (
      <button style={Style}>{this.state.value}</button>
    );
  }
});

React.render(<Box/>, document.body);
