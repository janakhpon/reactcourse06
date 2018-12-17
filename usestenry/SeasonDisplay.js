import React from 'react';

const getSeason = (lat, month)=> {
    if(month >2 && month <9){
        lat > 0 ? "summer" : "winter";
    }else{
        lat > 0 ? "winter" : "summer";
    }
}

const SeasonDisplay = props =>{

    const season = getSeason(props.lat, new Date().getMonth());
    const text = season === "winter" ? "Blurrrr .. it is chilly" : " Let's hit the beach!";
    const iconName = season === "winter" ? "snowflake" : "sun";

    return(
        <div>
        <i className={`${iconName} icon`}></i>
        <h1>{text}</h1>
        <i className={`${iconName} icon`}></i>
        </div>
    );
}

export default SeasonDisplay;