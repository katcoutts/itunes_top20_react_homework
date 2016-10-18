var React = require('react');
var SongList = require('./songList.jsx')

var Top20Box = React.createClass({

  getInitialState:function(){
    return { songs: [] }
  },

  componentDidMount: function(){
    var url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      var data = JSON.parse(request.responseText);
      console.log(data);
      console.log("songs: ", data.feed.entry)
      this.setState({
        songs: data.feed.entry,
      });
    }.bind(this);
    request.send(); 
  },


  render:function(){
    return(
      <div>
        <h2>Top 20 Songs</h2>
        <SongList songs = {this.state.songs}></SongList>
      </div>
    )
  }
})


module.exports = Top20Box;