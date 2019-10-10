import React from 'react';
import {
  IonPage, 
  IonContent
} from '@ionic/react';

import Header from '../components/Header/Header';
import NewsArticles from '../components/NewsArticles';
import './NewsPage.css';

const NewsPage = () => {
  return (
    <>
    <IonPage>
      <Header/>
        <IonContent style={{maxWidth: "500px", alignItems: "center"}}>
          <NewsArticles/>
        </IonContent>
    </IonPage>
    </>
  );
};

export default NewsPage;
