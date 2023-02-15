import React, { Component } from 'react'
import axios from 'axios';

class FooterComponent extends Component {

    state = {
        temperatura: ""
    }
    render() {

        
        let temperatura = "";
        axios.get("https://api.open-meteo.com/v1/forecast?latitude=10.00&longitude=-84.12&hourly=temperature_2m").then(data =>{
            const temperatura = data["data"]["hourly"]["temperature_2m"][0] + "°C";
            this.setState({temperatura});
        })
        let ano = new Date().getFullYear();
        return (
        <div className='container'>
            <footer>
                VLA {ano} - Clima en Costa Rica: {this.state.temperatura}
            </footer>
        </div>
        )
    }
}

export default FooterComponent;