var React = require('react');
var SongDetail = require('./song_detail.jsx');

var SongList = React.createClass({
  render: function() {
    var songs = this.props.songs.map(function(song, index) {
      var shortSong = {
        title: song['im:name'].label,
        artist: { name: song['im:artist'].label, link: song['im:artist'].attributes.href },
        image: song['im:image'][2].label,
        audio: { type: song.link[1].attributes.type, link: song.link[1].attributes.href }
      }
      return (<SongDetail key={index} song={shortSong}></SongDetail>)
    });

    return(<div className="song-list">{songs}</div>)
  }
})

module.exports = SongList;