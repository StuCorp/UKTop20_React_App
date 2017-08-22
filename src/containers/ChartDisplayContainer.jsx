import React from 'react'
import Header from '../components/Header.jsx'
import Chart from '../components/Chart.jsx'
import GenreSelect from '../components/GenreSelect.jsx'
import Footer from '../components/Footer.jsx'

export default class ChartDisplayContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      top20songs: []
    };
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', ()=>{
      if(request.status ===200){
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        debugger;
        this.setState({
          top20songs: data.feed.entry
        });
      }
    });
    request.send();


  }

  render(){
    return(
        <div className="chart-container">
          <Header />
          <Chart top20songs={this.state.top20songs}/>


        </div>
      )
  }

}