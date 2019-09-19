import React, { Component } from "react";
import { IonButton, IonIcon, IonContent, IonTextarea, IonItem, IonItemGroup, IonCard, IonCardTitle, IonCardContent } from '@ionic/react'
import { GoogleTranslate } from '../utilis/GoogleTranslate';
import { swap } from "ionicons/icons";
import ReactCountryFlag from "react-country-flag";

 
const outputCard = {
    backgroundColor: "whitesmoke",
    height: '250px'
}

class Translator extends Component {
    constructor(){
        super();
        this.state = {
            input:'',
            output: '',
            sourceLanguage: 'en',
            outputLanguage: 'nl'   
        };
    };

    handleTextInput = e => {
        this.setState({input:e.target.value})
    };

    clearOutput = () => {
        this.setState({output: ""})
    };


    translateInput = () => {
        GoogleTranslate.translate([this.state.input],this.state.sourceLanguage, this.state.outputLanguage, 
        (err, translations) => {        
        this.setState({output:translations.translatedText}) 
        })
        console.log(this.state.input)
    };

    changeLanguage = () => {
        this.setState({input:''});
        this.setState({output:''});
        if (this.state.sourceLanguage == 'en'){
            this.setState({sourceLanguage:'nl'})
            this.setState({outputLanguage:'en'})
            return <ReactCountryFlag code="nl"/>
        }
        else {
            this.setState({sourceLanguage:'en'})
            this.setState({outputLanguage:'nl'})
            return <ReactCountryFlag code="gb"/>

        }; 
    };


    render(){
        return (
            <>
            <IonCard>
                <IonCardContent style={outputCard}>
                <ReactCountryFlag code={this.state.outputLanguage == 'en' ? 'gb' : 'nl' }/>
                <h3>{this.state.output}</h3>
                </IonCardContent>
                    <IonButton color="medium" expand="full" onClick={this.changeLanguage}><IonIcon icon={swap}/></IonButton>

                <IonCardContent>
                <ReactCountryFlag code={this.state.sourceLanguage == "en" ? "gb" : "nl"}/>

                <IonTextarea onKeyDown={this.clearOutput} placeholder="Enter text here!"
                onIonChange={this.handleTextInput} value={this.state.input}></IonTextarea>
                </IonCardContent>
            
            
           
            <IonButton expand="block"  onClick={this.translateInput}>Translate</IonButton>
            </IonCard>
                        

            </>
        )
    }
}
export default Translator;