import React from 'react';



const seasonConfig {
    summer : {
        text : 'Let hit the beach',
        iconName : "sun"
    },
    
    winter : {
        text : "Burr it's chilly",
        iconName : "snowflake"
    }
};


const getSeason = (lat, month)=> {
    if(month >2 && month <9){
        lat > 0 ? "summer" : "winter";
    }else{
        lat > 0 ? "winter" : "summer";
    }
}




const SeasonDisplay = props =>{

    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];

    return(
        <div>
        <i className={`massive ${iconName} icon`}></i>
        <h1>{text}</h1>
        <i className={`massive ${iconName} icon`}></i>
        </div>
    );
}

export default SeasonDisplay;