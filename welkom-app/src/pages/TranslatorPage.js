import {
  IonSlides, IonPage, IonContent
} from '@ionic/react';
import React from 'react';
import Header from '../components/Header/Header';
import Translator from '../components/Translator';

const TranslatorPage = () => {
  return (
    <IonPage>
      <IonContent>
          <h1>Translator</h1>
        <Translator/>
      </IonContent>
    </IonPage>
  );
};

export default TranslatorPage;
