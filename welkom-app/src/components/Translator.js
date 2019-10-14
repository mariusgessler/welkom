import React, { Component } from "react";
import { IonButton, 
        IonIcon,
        IonTextarea,
        IonCard, 
        IonCardContent } from "@ionic/react";

import { GoogleTranslate } from "../utilis/GoogleTranslate";
import { swap } from "ionicons/icons";
import ReactCountryFlag from "react-country-flag";

 
class Translator extends Component {
    constructor(){
        super();
        this.state = {
            input:"",
            output: "",
            sourceLanguage: "en",
            outputLanguage: "nl"   
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
    };

    swapLanguage = () => {
        this.setState({
            input:"",
            output:"",
            sourceLanguage: this.state.outputLanguage,
            outputLanguage: this.state.sourceLanguage
            });

        if (this.state.sourceLanguage === "en"){
            return <ReactCountryFlag code="gb"/>
        }
        else {
            return <ReactCountryFlag code="nl"/>
        }; 
    };


    render(){
        return (
            <>
            <IonCard style={{maxWidth: "450px", margin: " 25px auto"}}>
                <IonCardContent className = "output-card" >
                    <ReactCountryFlag className="flag" code={this.state.outputLanguage === "en" ? "gb" : "nl" }/>
                     <p >{this.state.output}</p>
                </IonCardContent>

                <IonButton className="swap-button" color="medium" expand="full" onClick={this.swapLanguage}>
                    <IonIcon icon={swap}/>
                </IonButton>

                <IonCardContent>
                    <ReactCountryFlag className = "flag" code={this.state.sourceLanguage === "en" ? "gb" : "nl"}/>
                    <IonTextarea onKeyDown={this.clearOutput} placeholder="Enter text here!"
                    onIonChange={this.handleTextInput} name="input" value={this.state.input} className="text-input"></IonTextarea>
                </IonCardContent>
            
                <IonButton expand="full"  className="translate-button"  onClick={this.translateInput} >Translate</IonButton>
            </IonCard>
            </>
        )
    }
}
export default Translator;