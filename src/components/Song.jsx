import React from 'react';

export default class Song extends React.Component{

  render(){
    


    return(
        <div className="Song">
        <img src={this.props.hitSong['im:image'][0].label} alt={this.props.hitSong['im:artist'].label}/>
        <p className="song-title">{this.props.hitSong['im:name'].label}</p>
        <p className="song-artist">{this.props.hitSong['im:artist'].label}</p>
        <a href={this.props.hitSong.link[1].attributes.href}>is magic?</a>
     

        </div>
      )
  }

}