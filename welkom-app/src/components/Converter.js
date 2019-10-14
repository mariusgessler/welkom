import React, { Component } from 'react';
import { 
        IonCard, 
        IonInput,
        IonLabel,
        IonItem, 
        IonButton,
        IonIcon,
        IonCardContent,
       } 
        from '@ionic/react';
import { gitCompare } from "ionicons/icons";


const BASE_URL = "https://free.currconv.com/api/v7/convert?q=cad_eur&compact=ultra&apiKey=";
const API_KEY  = process.env.REACT_APP_CURRENCY_EXCHANGE_API_KEY;

class CurrencyExchanger extends Component{
    constructor(){
        super()
        this.state = {
            exchangeRate: null,
            date: null,
            input: 1,
            output: null,
            sourceCurrency:"EUR",
            outputCurrency:"CAD"
        }
    };

    componentDidMount(){
        this.getExchangeRates();
        this.getDate();
    };

    getExchangeRates = () => {
        const URL = BASE_URL + API_KEY;
        fetch(URL).then(response => response.json())
            .then((data) => {
                this.setState({exchangeRate:data.CAD_EUR.toFixed(2),
                });
            this.convertInput()
            })
            .catch((error) => {
                alert(error);
            });
    };

    getDate = () => {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();

        if (dd<10) {
            dd = '0' + dd
        }
        if (mm<10) {
            mm = '0' + mm
        }

        today = dd + '/' + mm + '/' + yyyy;
        this.setState({date:today})
    };

    handleInput = (e) => {
        this.setState({
            input: e.target.value,
        });
        this.convertInput()
    };

    convertInput = () => {
        if (this.state.sourceCurrency === "EUR"){
            let convertedToCAD = this.state.input / this.state.exchangeRate;
            this.setState({output: convertedToCAD.toFixed(2)});
        }else {
            let convertedToEUR = this.state.input * this.state.exchangeRate;
            this.setState({output: convertedToEUR.toFixed(2)});
        }
    };

    handleSwap = (e) => {
        e.preventDefault();
        this.setState({
                sourceCurrency: this.state.outputCurrency,
                outputCurrency: this.state.sourceCurrency,
                },
            this.convertInput
            );   
    };
 
    render(){
        return (
            <>
                <div className="converter-output">
                    {/* Show "0.00" instead of "" for better UX */}
                <h2>{this.state.input === "" ? "0.00" : this.state.input} {this.state.sourceCurrency} </h2>
                        <p>equals</p> 
                    <h2> {this.state.output} {this.state.outputCurrency}</h2> 
                        <p>as of {this.state.date} </p>
                </div>

                <IonCard style={{maxWidth: "600px", margin: "0 auto"}}>        
                    <IonCardContent className="converter-container">
                    <div className="converter-input">
                        <IonItem>
                            <IonInput clearOnEdit={true} clearInput={true} type="number" onIonChange={this.handleInput} value={this.state.input} />
                            <IonLabel>{this.state.sourceCurrency}</IonLabel>
                        </IonItem>

                        <IonItem>    
                            <IonInput disabled={true} type="number"  value={this.state.output} ></IonInput>
                            <IonLabel>{this.state.outputCurrency}</IonLabel>               
                        </IonItem>
                    </div>
                                    
                    <IonButton fill="clear" onClick={this.handleSwap}>
                        <IonIcon size="medium" icon={gitCompare}/>
                    </IonButton>

                    </IonCardContent>
                </IonCard>
                </>
        ) 
    }
};

export default CurrencyExchanger;