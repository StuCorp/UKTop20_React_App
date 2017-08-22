import React from 'react';
import Song from '../components/Song.jsx'

export default class Chart extends React.Component{
  render(){
  if(!this.props.top20songs){
    return null;
  }
  const chartSongs = this.props.top20songs.map( (song, index)=>{
    return ( 
    <Song hitSong={song} key={index}/>
    )
  } );


  return(
    <div className='chart-songs'>
    {chartSongs}
    </div>
    )
}
}