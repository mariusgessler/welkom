import  { Component } from 'react';

class Greeting extends Component{
    constructor(){
        super()
        this.state = {
            hour: null,
        }
    }

    componentDidMount(){
        this.getHour()
    }

    getHour = () => {
        let date = new Date();
        let hour = date.getHours();
        this.setState({hour});
    };

    render(){
        if (this.state.hour < 12){
            return "Goedemorgen!"
        }else if(this.state.hour < 18){
            return "Goedenmiddag!"
        }else{
            return "Goedenavond!"
        }  
    }
}

export default Greeting;