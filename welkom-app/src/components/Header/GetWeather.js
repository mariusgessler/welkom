import React, {Component} from "react";
import { 
         IonFab, IonFabButton 
         } from '@ionic/react';

const BASE_URL = "https://api.darksky.net/forecast/";
const API_KEY  = process.env.REACT_APP_WEATHER_API_KEY;
const CORS     = "https://cors-anywhere.herokuapp.com/";


class GetWeather extends Component{
    constructor(props){
        super(props);
        this.state = {
            weather: [],
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
        })
        .catch((error) => {
            console.log(error)
        })
    };

    render(){
        return (
            <>
            {!this.state.isLoading ? 
            this.state.weather.precipProbability > 0.6 ? 
                <IonFab vertical="start"  horizontal="end" slot="fixed">
                    <IonFabButton color="light" >
                        <span role="img" aria-label="umbrella" className="umbrella">☂️</span>
                    </IonFabButton>
                </IonFab> 
            : null 

            :  null}
            </>
        );
    };
};

export default GetWeather;

