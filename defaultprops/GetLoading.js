import React from 'react';

const GetLoading = props => {
    return <div> {props.message} </div>
}

GetLoading.defaultProps = {
    message : "loading"
}


export default GetLoading;