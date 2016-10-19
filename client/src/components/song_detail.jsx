var React = require('react');
var SongArtwork = require('./song_artwork.jsx')
var SongAudio = require('./song_audio.jsx')

var SongDetail = React.createClass({
  render:function(){
    if (!this.props.song) return(<h3>No song info</h3>)

    return(
      <div className="song-detail">
        <table>
          <tbody>
          <tr>
            <td><SongArtwork image={this.props.song.image}></SongArtwork></td>
            <td>
              <table>
                <tbody>
                  <tr><td><b>Artist:</b></td><td>{this.props.song.artist.name}</td></tr>
                  <tr><td><b>Title:</b></td><td>{this.props.song.title}</td></tr>
                </tbody>
              </table>
              <SongAudio track={this.props.song.audio}></SongAudio>
            </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
})

module.exports = SongDetail;
