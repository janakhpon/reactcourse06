import React from 'react';
import ReactDOM from 'react-dom';
import GetPosition from './GetPosition';
import GetError from './GetError';
import GetLoading from './GetLoading';

class App extends React.Component {

    constructor(props){

        super(props);

        this.state = { lat:null,  errorMessage:''};


        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState = {lat: position.coords.latitude};
            },
            err => {
                this.setState = {errorMessage: err.message};
            }
        )
    }


    render(){
        if(this.state.lat && !this.state.errorMessage){
            return (
                <div>
                    <GetPosition lat={this.state.lat} />
                </div>
            );
        }

        if(!this.state.lat && this.state.errorMessage){
            return(
                <div>
                    <GetError error = {this.state.errorMessage} />
                </div>
            );
        }

        return(
            <div>
                <GetLoading />
            </div>
        );
    }

    
};