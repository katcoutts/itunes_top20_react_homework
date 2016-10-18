var React = require('react');

var GenreSelector = React.createClass({

  getInitialState:function(){
    return { genres: [] }
  },

  componentDidMount: function(){
    var url = "https://itunes.apple.com/WebObjects/MZStoreServices.woa/ws/genres?id=34";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      var data = JSON.parse(request.responseText);
      console.log(data);
      console.log("genres: ", data[34].subgenres)
      this.setState({
        genres: data[34].subgenres,
      });
    }.bind(this);
    request.send(); 
  },

  handleChange: function(event){
    var newId = event.target.value;
    console.log(newId);
    this.props.selectGenre(newId);
  },

  render: function(){
    var options = [];
    console.log("this.state.genres: ", this.state.genres)
    for (var key in this.state.genres){
      var option = <option key={key} value={this.state.genres[key].id}>{this.state.genres[key].name}</option>
      options.push(option)
    }

    return(
      <div id="genre-picker">
        <h4>Pick a genre to see the iTunes top 20</h4>
        <select id="songs" onChange={this.handleChange}>
         <option selected disabled>Pick a genre</option>
         {options}
        </select>
      </div>
    )
  }

})

module.exports = GenreSelector;
