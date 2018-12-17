import React from 'react';
import ReactDOM from 'react-dom';
import GetPosition from './GetPosition';
import GetError from './GetError';
import GetLoading from './GetLoading';

class App extends React.Component {


    //abbreviation of constructor method and initial state
    stae = { lat:null, errorMessage : ''};

    //renders the contents to the screen at first ..
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState = {lat: position.coords.latitude};
            },
            err => {
                this.setState = {errorMessage: err.message};
            }
        )
    }

    renderContent(){
        if(this.state.lat && !this.state.errorMessage){
            return <GetPosition lat={this.state.lat} />

        }

        if(!this.state.lat && this.state.errorMessage){
            return  <GetError error = {this.state.errorMessage} />
        }

        return  <GetLoading message="load.." />
    }

    render(){
        return(
            <div>
                {this.renderContent()}
            </div>
        );
    }

    
};