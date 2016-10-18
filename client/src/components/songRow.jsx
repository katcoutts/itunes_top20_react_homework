var React = require('react')

var SongRow = function(props){
    return(
      <div className='song-row'>
       <h3>{props.song['im:collection']['im:name'].label}</h3>
       <h4>{props.song['im:artist'].label}</h4>
       <img src={props.song['im:image'][2].label}></img>
       <audio controls className="audio"> 
          <source src= {props.song.link[1].attributes.href} type= {props.song.link[1].attributes.type} />
       </audio>
      </div>
    )
}


module.exports = SongRow