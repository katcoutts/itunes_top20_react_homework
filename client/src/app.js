var React = require('react');
var ReactDOM = require('react-dom');

var Top20Box = require('./components/top20Box.jsx')

window.onload = function(){
  ReactDOM.render(
    <Top20Box></Top20Box>,
    document.getElementById('app')
  );
}
