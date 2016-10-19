var React = require('react');

var SongAudio = function(props) {
  return (
    <div className="song-audio"><audio src={props.track.link} preload="auto" controls></audio></div>
  ) 
}

module.exports = SongAudio;