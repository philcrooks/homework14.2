var React = require('react');
var SongList = require('./song_list.jsx');

var SongBox = React.createClass({
  getInitialState:function(){
    return { songs: [] }
  },

  componentDidMount: function() {
    var url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
      var data = JSON.parse(request.responseText);
      this.setState({songs: data.feed.entry});
    }.bind(this);
    request.send();
  },

  render:function(){
    return(
      <div className="song-box">
        <SongList songs={this.state.songs}></SongList>
      </div>
    )
  }
})


module.exports = SongBox;