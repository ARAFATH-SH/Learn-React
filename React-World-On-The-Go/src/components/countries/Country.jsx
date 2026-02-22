import React from 'react';  



const Country = ({country}) => {
    console.log(country);
    return (
        <div>
            
            <h2>Name: {country.name}</h2>
            <div>
                <img src={country.flag} alt={country.name} width="100px" height="50px"/>
            </div>
            <p><span style={{color: "White", fontWeight: "bold"}}>iso2: </span> {country.iso2}</p>
            <p><span style={{color: "White", fontWeight: "bold"}}>iso3: </span> {country.iso3}</p>
        </div>
    );
};

export default Country;