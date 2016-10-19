var React = require('react');

var SongArtwork = function(props) {
  return (
    <div className="song-artwork">
      <img src={props.image} />
    </div>
  )
}

module.exports = SongArtwork;