import React from 'react';
import countries from '../countries.json'

function CountryDetails(props){
    return(
        <div style={{float: 'right'}}>
            <h1>COUNTRY - {props.match.params.countryCode}</h1>
        </div>
    );
}

export default CountryDetails;