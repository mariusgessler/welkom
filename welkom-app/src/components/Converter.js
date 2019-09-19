import React, { Component } from 'react';

const BASE_URL = "https://free.currconv.com/api/v7/convert?q=cad_eur&compact=ultra&apiKey=";
const API_KEY  = process.env.REACT_APP_CURRENCY_EXCHANGE_API_KEY;

class CurrencyExchanger extends Component{
    constructor(){
        super()
        this.state = {
            exchangeRate: null,
            input:null,
            exchangedInput: null,
            sourceCurrency:"EUR",
            outputCurrency:"CAD"
        }
    this.getExchangeRates = this.getExchangeRates.bind(this)

    }

    componentDidMount(){
        this.getExchangeRates()
    }

    getExchangeRates() {
        const URL = BASE_URL + API_KEY;

        fetch(URL).then(response => response.json())
            // Data retrieved so parse it.
            .then((data) => {
                this.setState({exchangeRate:data.CAD_EUR.toFixed(2)})
                console.log(data)
            })
            // Data is not retieved.
            .catch((error) => {
                alert(error);
            }); 
        
    }

    // handleAmountInput = (e) =>
    //     this.setState({input: e.target.value})
    
    
    render(){
        return (
            <>
            <p>1 Canadian Dollar equals {this.state.exchangeRate} Euro</p>
            </>

        )
            
        
    }

}

export default CurrencyExchanger;