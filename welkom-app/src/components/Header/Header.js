import React from 'react';
import { IonHeader } from '@ionic/react';

import WeatherWidget from './WeatherWidget';
import Greeting from './Greeting';
import './Header.css';

const Header = () => (
  <IonHeader className="header">
    <h1><Greeting /></h1>
    <WeatherWidget />
  </IonHeader>
);

export default Header;
