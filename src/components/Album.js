import React, { Component } from 'react';
import albumData from '../data/albums';
import PlayerBar from './PlayerBar';

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state ={
      album: album,
      currentSong: album.songs[0],
      isPlaying: false,
      isHovered: null,


    };

    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true});
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false});
  }

  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song});
  }

  handelSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong) {
      this.pause();
    } else {
      if (!isSameSong) { this.setSong(song); }
      this.play();
    }
  }

  handleSongHover(index) {
    this.setState({ isHovered: index});
    console.log(this.state.isHovered);
  }

songRowButtons(song, index) {
  const play = <span className="icon ion-md-play-circle"></span>
  const pause = <span className="icon ion-md-pause"></span>

  if (song === this.state.currentSong && this.state.isPlaying) {
    return pause;
  } else if(this.state.isHovered === index) {
    return play;
  } else {
    return index + 1
  }

}

  render() {
    return (
      <section className="album">
        {this.props.match.params.slug}
        <section id="album-info">
          <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
        <div className="album-details">
          <h1 id="album-title">{this.state.album.title}</h1>
          <h2 className="artist">{this.state.album.artist}</h2>
          <div id="release-info">{this.state.album.year} {this.state.album.label}</div>
        </div>
      </section>
      <table id ="song-list">
        <colgroup>
          <col id="song-number-column"/>
          <col id="song-title-column"/>
          <col id="song-duration-column"/>
        </colgroup>
        <tbody>
          {
            this.state.album.songs.map(( song, index) =>
              <tr className="song" key={index} onClick={() => this.handelSongClick(song)} onMouseEnter={() => this.handleSongHover(index)} onMouseLeave={() => this.handleSongHover(null)} >
                <td id="song-number">{this.songRowButtons(song, index)}</td>
                <td id="song-title">{song.title}</td>
                <td id="song-duration">{song.duration}</td>
              </tr>
              )
          }
        </tbody>
      </table>
      <PlayerBar isPlaying={this.state.isPlaying} currentSong={this.state.currentSong} />
    </section>
    );
  }
}

export default Album;
