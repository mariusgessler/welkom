import React, { Component } from 'react';
import { IonButton, IonImg, IonSlide, IonContent, IonTextarea, IonItem, IonItemGroup, IonItemDivider, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonSlides } from '@ionic/react'

const BASE_URL       = "https://newsapi.org/v2/everything?q=netherlands&apiKey=";
const API_KEY        = process.env.REACT_APP_NEWS_API_KEY;




class NewsArticles extends Component {
    constructor() {
        super();
        this.state = {
            articles: []
        }
        this.getArticles = this.getArticles.bind(this)
    }


    componentDidMount(){
        this.getArticles()
    }

    getArticles(){
        const URL = BASE_URL + API_KEY;

        fetch(URL). then(response => response.json())
        .then((data) => {
            this.setState({articles:data.articles});
            console.log(this.state.articles)
        })
        .catch((error) => {
            alert(error);
        });
    }

    render() {
        return (
            <>
            {/* <IonContent> */}
           
                {this.state.articles.map((articles) => 
                 <IonSlide>
                    <a href={articles.url}>
                    <IonCard>
                        <IonImg src={articles.urlToImage}></IonImg>
                        <IonCardContent>
                            <IonCardHeader>
                                <IonCardTitle>{articles.title}</IonCardTitle>
                            </IonCardHeader>
                            <p>{articles.description}</p>
                        </IonCardContent>
                    </IonCard>
                    </a>
                    </IonSlide>
                )}        
            
            </>
        )
    }

};
export default NewsArticles;
