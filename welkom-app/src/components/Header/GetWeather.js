import React, {Component} from "react";
import { IonIcon, IonSpinner } from '@ionic/react';
import { umbrella } from 'ionicons/icons';

const BASE_URL = "https://api.darksky.net/forecast/";
const API_KEY  = process.env.REACT_APP_WEATHER_API_KEY;
const CORS     = "https://cors-anywhere.herokuapp.com/";



class GetWeather extends Component{
    constructor(props){
        super(props);
        this.state = {
            weather: [],
            isLoading: true,
        }
    };

    componentDidMount(){
        this.getWeather(this.props)
    };

    getWeather = (location) => {
        const URL = CORS + BASE_URL + API_KEY + '/'  + location.latd + ',' + location.lngt;
        fetch(URL).then(response => response.json())
        .then((data) => {
            this.setState({weather:data.currently})
            this.setState({isLoading:false})
        })
        .catch((error) => {
            alert(error)
        })
    };

    render(){
        // Conditionally rendering the umbrella icon as soon as the weather data has been.
        // set in the state
        return (
            <>
            {!this.state.isLoading ? 
            this.state.weather.precipProbability > 0.5 ?   <IonIcon icon={ umbrella }  /> : console.log(this.state.weather) 
            :  <IonSpinner size="small"/> }
            
            </>
        );
    };
};

export default GetWeather;

