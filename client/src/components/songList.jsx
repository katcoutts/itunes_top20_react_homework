var React = require('react')
var SongRow = require('./SongRow')

var SongList = function (props){

  var songNodes = props.songs.map(function(song, index) {
    console.log("song ", song)
    return (
      <li key={index}>
        <SongRow song={song}/>
      </li>
    )
  })

  return(
    <div className='song-list'>
      <ol>
        {songNodes}
      </ol>
    </div>
  )
}

module.exports = SongList;