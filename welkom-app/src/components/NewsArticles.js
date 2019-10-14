import React, { Component } from 'react';
import { IonSpinner,
         IonImg, 
        IonCard, 
        IonCardContent, 
        IonCardTitle, 
        IonCardHeader, 
        IonCardSubtitle } from '@ionic/react'

const BASE_URL       = "https://newsapi.org/v2/everything?q=netherlands&apiKey=";
const API_KEY        = process.env.REACT_APP_NEWS_API_KEY;

class NewsArticles extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            isLoading: true
        }
    }


    componentDidMount(){
        this.getArticles()
    }

    getArticles = () => {
        const URL = BASE_URL + API_KEY;
        fetch(URL).then(response=>response.json())
        .then((data)=>{
            this.setState({
                articles:data.articles,
                isLoading:false
                });
        })
        .catch((error) => {
            alert(error);
        });
    }

    render() {
        return (
            <>
           {!this.state.isLoading ?
                this.state.articles.map((articles,index) => 
                    <IonCard key={index} className="card" style={{maxWidth: "450px", margin: " 25px auto"}}>
                        <IonImg src={articles.urlToImage}></IonImg>
                            <IonCardHeader>
                                <a href={articles.url}>
                                <IonCardSubtitle>{articles.source.name}, {articles.publishedAt.slice(0,10)}</IonCardSubtitle>
                                <IonCardTitle>{articles.title}</IonCardTitle>
                                </a>
                            </IonCardHeader>
                             <IonCardContent className="card-content">
                            <p>{articles.description}</p>
                        </IonCardContent>
                    </IonCard>
                )       
           : <IonSpinner className="spinner"/> }
            </>
        )
    }

};
export default NewsArticles;
