var React = require('react');
var SongList = require('./songList.jsx');
var GenreSelector = require('./genreSelector.jsx')

var Top20Box = React.createClass({

  getInitialState:function(){
    return { songs: []}
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

  makeRequest: function(newUrl){
    var url = newUrl;
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


  setGenre: function(event){
    var newUrl = "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=" + event + "/json"
    console.log("new url" , newUrl)
    this.setState({url: newUrl});
    this.makeRequest(newUrl);
  },

  render:function(){
    return(
      <div>
        <h2>iTunes Top 20</h2>
        <GenreSelector selectGenre={this.setGenre}></GenreSelector>
        <SongList songs = {this.state.songs}></SongList>
      </div>
    )
  }
})


module.exports = Top20Box;