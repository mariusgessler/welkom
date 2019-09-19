import {
  IonSlides, IonPage, IonContent
} from '@ionic/react';
import React from 'react';
import Header from '../components/Header/Header';
import NewsArticles from '../components/NewsArticles'
import './Tab1.css';

const slidesOpts = {
  slidesPerView: 1,
  spaceBetween: 500
  
  };

const NewsPage = () => {
  return (
    <IonPage>
      <IonContent>
        <IonSlides scrollbar={true} id="slides" options={slidesOpts}>
        <NewsArticles/>
       </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default NewsPage;
