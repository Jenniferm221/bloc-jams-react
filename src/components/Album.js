import React, { Component } from 'react';
import albumData from '../data/albums';

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state ={
      album: album
    };
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
          <col id="song-number-column"/>Track
          <col id="song-title-column"/>Title
          <col id="song-duration-column"/>Duration
        </colgroup>
        <tbody>
          {
            this.state.album.songs.map(( songs, index) =>
              <tr key={index}>
                <td id="song-number">{index + 1}</td>
                <td id="song-title">{songs.title}</td>
                <td id="song-duration">{songs.duration}</td>
              </tr>
              )
          }
        </tbody>
      </table>
    </section>
    );
  }
}

export default Album;
