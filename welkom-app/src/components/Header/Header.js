import React from 'react';
import WeatherWidget from './WeatherWidget';
import Greeting from './Greeting';
import { IonHeader } from '@ionic/react'

const Header = () => {
    return (
        <IonHeader>
        <h2><Greeting/></h2>
        <WeatherWidget/>
        </IonHeader>
    )

}

export default Header;
