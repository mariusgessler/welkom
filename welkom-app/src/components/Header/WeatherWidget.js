import React, {Component} from 'react';
import GetWeather from './GetWeather';

class WeatherWidget extends Component{
    constructor(){
        super();
        this.state = {
            lngt: null,
            latd: null
        }
    }

    componentDidMount(){
        this.getLocation()
    }

    getLocation = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position => {
                this.setState({lngt: position.coords.longitude.toFixed(2)}); //Formating the location data so a valid API fetch can be made.
                this.setState({latd:position.coords.latitude.toFixed(2)});     
                console.log(this.state.lngt)           
            });
        };
    }
   
    render() {
            const { lngt, latd } = this.state;
            if (!lngt || !latd) return null; // Conditinally rendering the WeatherWidget if user allows to get his geolocation/
            return <GetWeather lngt={lngt} latd={latd} />;
            }
            };
export default WeatherWidget;



