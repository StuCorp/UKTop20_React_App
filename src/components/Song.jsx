import React from 'react';
import ReactAudioPlayer from 'react-audio-player';


export default class Song extends React.Component{

  render(){
    


    return(
        <div className="Song">
        <h1 className="chart-pos">{this.props.pos}</h1>
        <img src={this.props.hitSong['im:image'][0].label} alt={this.props.hitSong['im:artist'].label}/>
        <ul className="song-specifics">
        <li className="song-title">{this.props.hitSong['im:name'].label}</li>
        <li className="song-artist">{this.props.hitSong['im:artist'].label}</li>
        <li className="song-genre">{this.props.hitSong.category.attributes.label}</li>
        </ul>
        <a className="buy-this" href={this.props.hitSong['id'].label}>Buy this!</a>
     <ReactAudioPlayer
       src={this.props.hitSong.link[1].attributes.href}
       controls
     />

        </div>
      )
  }

}