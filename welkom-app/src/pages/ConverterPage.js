import React from 'react';

import {
  IonPage, 
  IonContent
} from '@ionic/react';

import Header from '../components/Header/Header';
import Converter from '../components/Converter';
import './ConverterPage.css';

const TranslatorPage = () => {
  return (
    <IonPage>
      <Header/>
      <IonContent>
        <Converter/>
      </IonContent>
    </IonPage>
    
  );
};

export default TranslatorPage;
