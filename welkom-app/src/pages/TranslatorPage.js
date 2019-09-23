import React from 'react';
import {
   IonPage, 
   IonContent
} from '@ionic/react';

import Header from '../components/Header/Header';
import Translator from '../components/Translator';
import './TranslatorPage.css'

const TranslatorPage = () => {
  return (
    <>
    <IonPage>
      <Header/>
        <IonContent>
          <Translator/>
        </IonContent>
    </IonPage>
    </>
  );
};

export default TranslatorPage;
