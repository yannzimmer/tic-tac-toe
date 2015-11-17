'use strict';

var React = require('react');

var Style = {height : "100px", width : "100px"};

var Box = React.createClass({
  getInitialState: function(){
    return {
      value: 'X'
    }
  },
  'render': function onRender () {
    return (
      <button style={Style}>{this.state.value}</button>
    );
  }
});

React.render(<Box/>, document.body);
