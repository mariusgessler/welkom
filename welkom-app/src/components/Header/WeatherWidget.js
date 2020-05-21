import React, {Component} from 'react';
import GetWeather from './GetWeather';

class WeatherWidget extends Component{
  constructor(){
    super();
    this.state = {
      lngt: null,
      latd: null
    }
  };

  componentDidMount(){
    this.getLocation()
  };

  getLocation = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          lngt: position.coords.longitude.toFixed(2),
          latd: position.coords.latitude.toFixed(2)
        })         
      })
    }
  };

  render() {
    if (!this.state.lngt || !this.state.latd) return null; 
    return <GetWeather lngt={this.state.lngt} latd={this.state.latd} />;
  };
  
};

export default WeatherWidget;
