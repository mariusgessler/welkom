import {
  IonSlides, IonPage, IonContent
} from '@ionic/react';
import React from 'react';
import Header from '../components/Header/Header';
import Converter from '../components/Converter';

const TranslatorPage = () => {
  return (
    <IonPage>
      <IonContent>

          <h1>Converter</h1>
        <Converter/>
      </IonContent>
    </IonPage>
  );
};

export default TranslatorPage;
